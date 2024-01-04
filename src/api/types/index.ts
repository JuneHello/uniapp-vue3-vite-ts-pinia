export * from "./login";

export interface Http {
  get<T>(url: string, params?: object): Promise<ResultData<T>>;
  post<T>(url: string, params?: object | string): Promise<ResultData<T>>;
}

// 请求响应参数（不包含data）
export interface Result {
  code?: string;
  message?: string;
}

// 请求响应参数（包含data）
export interface ResultData<T = any> extends Result {
  data: T;
}
