import axios from "axios";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";

interface LoginResponse {
  data: {
    token: string;
  };
}

export const handleLogin = async (
  username: string,
  password: string,
  rememberMe: boolean,
  setError: (error: string) => void
) => {
  try {
    const response = await axios.post<LoginResponse>(
      "https://be-intern.bccdev.id/nayla/api/v1/users/login",
      {
        username,
        password,
      }
    );

    if (response.status === 200 && response.data.data.token) {
      console.log(
        "Login successful. Token received:",
        response.data.data.token
      );
      setError("");

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

      window.location.reload();
      redirect("/home");
    } else {
      console.log(
        "Invalid username or password. Response data:",
        response.data
      );
      setError("Invalid username or password");
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response && error.response.status === 401) {
        setError("Invalid username or password");
      } else {
        setError("An error occurred during login. Please try again later.");
      }
    } else {
      setError("An unexpected error occurred. Please try again later.");
    }
  }
};
