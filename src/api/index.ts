import { getCommonParams } from "@/config/commonParams";
import baseRequest from "./helper/baseRequest";
import { Http } from "./types";

const http: Http = {
  get: (url: string, params?: object) =>
    baseRequest(
      "GET",
      url,
      {
        ...getCommonParams(),
        ...params
      },
      { "content-type": "application/json; charset=utf-8" }
    ),
  post: (url: string, params?: object) =>
    baseRequest(
      "POST",
      url,
      {
        ...getCommonParams(),
        ...params
      },
      { "content-type": "application/x-www-form-urlencoded" }
    )
};

export default http;
