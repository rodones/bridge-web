import { decrypt } from "../cypher";
import { AuthState } from "./auth.types";

const authState = async (): Promise<AuthState> => {
  const auth = localStorage.getItem("auth");
  const decrypted = (await decrypt(auth)) as AuthState;

  if (
    typeof decrypted === "object" &&
    typeof decrypted.access_token === "string"
  ) {
    return {
      ...decrypted,
      loggedIn: true,
    };
  }

  return {
    loggedIn: false,
  } as AuthState;
};

export default authState;
