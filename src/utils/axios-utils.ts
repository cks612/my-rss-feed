import axios from "axios";
import type { AxiosResponse } from "axios";

const client = axios.create({
  baseURL: "http://localhost:3000",
});

export const request = async ({ ...options }) => {
  client.defaults.headers.common.Authorization = "Bearer token";
  const onSuccess = (response: AxiosResponse) => response;
  const onError = (error: Error) => {
    return error;
  };
  return client(options).then(onSuccess).catch(onError);
};
