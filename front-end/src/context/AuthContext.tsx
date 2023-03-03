import { createContext, ReactNode, useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { IUser } from "./interfaces";
import api from "../services";

interface IAuthContext {
  requestLogin: (data: FieldValues) => Promise<void>;
  navigate: NavigateFunction;
  user: IUser | null | undefined;
}

interface IAuthProvider {
  children: ReactNode;
}
export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null | undefined>();
  const navigate = useNavigate();

  const requestLogin = async (data: FieldValues): Promise<void> => {
    try {
      const res = await api.post("/user/login", data);
      localStorage.setItem("@lojaDeCarros:token", res.data.token);
      api.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
      navigate("/profile");
    } catch (error) {
      console.error(error);
    }
    return;
  };

  useEffect(() => {
    const requestProfile = async () => {
      const token = localStorage.getItem("@lojaDeCarros:token");
      if (token) {
        try {
          api.defaults.headers.common.authorization = `Bearer ${token}`;
          const { data } = await api.get("/user/profile");
          setUser(data);
        } catch (error) {
          console.error(error);
        }
      }
    };
    requestProfile();
  }, []);
  return (
    <AuthContext.Provider value={{ requestLogin, navigate, user }}>
      {children}
    </AuthContext.Provider>
  );
};
