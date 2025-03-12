import { login } from "@/api/services/auth";
import Cookies from "js-cookie";

export const handleLogin = async (
  username: string,
  password: string,
  rememberMe: boolean
): Promise<void> => {
  try {
    const response = await login(username, password);
    if (response.status === 200 && response.data.data.token) {
      Cookies.set("token", response.data.data.token, {
        expires: rememberMe ? 7 : 1 / 8,
        path: "/",
        secure: true,
        sameSite: "strict",
      });
      if (rememberMe) {
        localStorage.setItem("rememberMe", "true");
      } else {
        localStorage.removeItem("rememberMe");
      }
    } else {
      throw new Error("Invalid username or password");
    }
  } catch (error) {
    throw error;
  }
};
