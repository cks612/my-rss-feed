import axios from "axios";

const client = axios.create({
  baseURL: "/api",
});

export const request = async ({ ...options }) => {
  client.defaults.headers.common.Authorization = "Bearer token";
  const onSuccess = (response: any) => response;
  const onError = (error: Error) => {
    return error;
  };

  return client(options).then(onSuccess).catch(onError);
};
