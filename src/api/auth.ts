import { UserData } from "../store/auth/auth.types";
import { axios } from "./base";

export const login = (username: string, password: string): Promise<UserData> =>
  axios
    .post<UserData>("/auth/login", {
      username,
      password,
    })
    .then((res) => res.data);
