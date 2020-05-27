import fetch from "../http/fetch";

export const login = user => fetch.post("users/login", user);

export const logout = () => fetch.get("users/logout");

export const isLogin = () => fetch.get("users/islogin");
