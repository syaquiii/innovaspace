import { redirect } from "next/navigation";
import Cookies from "js-cookie";

const logout = () => {
  Cookies.remove("token");
};

export const handleLogout = () => {
  logout();
  redirect("/login");
};
