import Axios from "axios";

export interface Result<T> {
  data: T;
}

export interface ErrorResult {
  code: number;
  message: string;
}

const deps = {
  token: "",
};

export const setToken = (token: string): void => {
  deps.token = token;
};

export const axios = Axios.create({
  baseURL: process.env.RODONES_PANEL_API,
  headers: {},
});

axios.interceptors.request.use((prevConfig) => {
  const config = { headers: {}, ...prevConfig };

  if (config.url !== "/auth/login") {
    config.headers.Authorization = `Bearer ${deps.token}`;
  }

  return config;
});
