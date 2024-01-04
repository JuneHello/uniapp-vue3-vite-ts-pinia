import showToast from "@/components/showToast";
/**
 * @description: 校验网络请求状态码
 * @param {Number} status
 * @return void
 */
export const checkStatus = (status: number) => {
  switch (status) {
    case 400:
      showToast("请求失败！请您稍后重试");
      break;
    case 401:
      showToast("登录失效！请您重新登录");
      break;
    case 403:
      showToast("当前账号无权限访问！");
      break;
    case 404:
      showToast("你所访问的资源不存在！");
      break;
    case 405:
      showToast("请求方式错误！请您稍后重试");
      break;
    case 408:
      showToast("请求超时！请您稍后重试");
      break;
    case 500:
      showToast("服务异常！");
      break;
    case 502:
      showToast("网关错误！");
      break;
    case 503:
      showToast("服务不可用！");
      break;
    case 504:
      showToast("网关超时！");
      break;
    default:
      showToast("请求失败！");
  }
};
