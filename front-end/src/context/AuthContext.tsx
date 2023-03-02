import { createContext, ReactNode, useState } from "react";
import { FieldValues } from "react-hook-form";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { IUser } from "./interfaces";
import api from "../services";

interface IAuthContext {
  requestLogin: (data: FieldValues) => Promise<void>;
  navigate: NavigateFunction;
  token: string | null;
  user: IUser | null;
}

interface IAuthProvider {
  children: ReactNode;
}
export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const navigate = useNavigate();

  const requestLogin = async (data: FieldValues): Promise<void> => {
    try {
      const res = await api.post("/user/login", data);
      setToken(res.data.token);
      navigate("/profile");
      console.log(res);
    } catch (error) {
      console.error(error);
    }
    return;
  };
  return (
    <AuthContext.Provider value={{ requestLogin, navigate, token, user }}>
      {children}
    </AuthContext.Provider>
  );
};
