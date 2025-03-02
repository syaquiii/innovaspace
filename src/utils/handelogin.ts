import DummyUser from "@/data/DummyUser";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";

export const handleLogin = async (
  email: string,
  password: string,
  rememberMe: boolean,
  setError: (error: string) => void
) => {
  const { user } = DummyUser;

  // WILL USE BCRYPT NEXT VERSION IF THE API FOR REGISTERING IS DONE
  const passwordMatch = password === user.password;

  console.log(passwordMatch);
  if (email === user.email && passwordMatch) {
    setError("");

    Cookies.set("token", "dummyTokenValue", {
      expires: 30,
      path: "/",
      secure: true,
      sameSite: "strict",
    });

    if (rememberMe) {
      localStorage.setItem("rememberMe", "true");
    } else {
      localStorage.removeItem("rememberMe");
    }

    redirect("/home");
  } else {
    setError("Invalid email or password");
  }
};
