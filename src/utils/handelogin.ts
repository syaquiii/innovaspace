import DummyUser from "@/data/DummyUser";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";

export const handleLogin = async (
  email: string,
  password: string,
  rememberMe: boolean,
  setError: (error: string) => void
) => {
  const { user } = DummyUser;

  const passwordMatch = await bcrypt.compare(password, user.passwordHash);

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
