import { isDevelopment, isH5 } from "@/utils/platform";
import { forward } from "../../router/router";
import env from "@/config/env";
import { globalLoading } from "@/components/Loading/globalLoading";
import showToast from "@/components/showToast";
import { checkStatus } from "./checkStatus";

function reject(err: { errno: number; errmsg: string }) {
  const { errmsg = "稍候片刻！", errno = -1 } = err;
  switch (errno) {
    case 10000:
      // 特殊异常处理
      forward("login");
      break;

    default:
      showToast(errmsg);
      break;
  }
}

// h5环境开启代理
const apiBaseUrl = isH5 && isDevelopment ? "/api" : env.apiBaseUrl;

const baseRequest = (
  method: "OPTIONS" | "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT" | undefined,
  url: string,
  data: { isLoading: any },
  header
): Promise<any> => {
  return new Promise(resolve => {
    globalLoading.showLoading(data.isLoading);
    delete data.isLoading;
    uni
      .request({
        url: apiBaseUrl + url,
        method,
        timeout: 20000,
        header,
        data
      })
      .then(res => {
        // 此处的 res 参数，与使用默认方式调用时 success 回调中的 res 参数一致
        console.log(res.data);
        if (res.statusCode >= 200 && res.statusCode < 400) {
          resolve(res.data);
        } else {
          reject({
            errno: -1,
            errmsg: "稍候片刻！"
          });
        }
        globalLoading.cancelLoading();
      })
      .catch(error => {
        // 此处的 err 参数，与使用默认方式调用时 fail 回调中的 err 参数一致
        globalLoading.cancelLoading();
        console.error(error);
        if (error.message.indexOf("timeout") !== -1) showToast("请求超时！请您稍后重试");
        if (error.message.indexOf("Network Error") !== -1) showToast("网络错误！请您稍后重试");
        // 根据服务器响应的错误状态码，做不同的处理
        if (error) checkStatus(error.status);
        // 服务器结果都没有返回(可能服务器错误可能客户端断网)，断网处理:可以跳转到断网页面
        if (!window.navigator.onLine) forward("/500");
        return Promise.reject(error);
      });
  });
};

export default baseRequest;
