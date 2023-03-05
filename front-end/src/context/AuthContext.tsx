import { createContext, Dispatch, ReactNode, useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { IUser } from "./interfaces";
import { AxiosError } from "axios";
import api from "../services";

interface IAuthContext {
  requestLogin: (data: FieldValues) => Promise<void>;
  requestRegister: (data: FieldValues) => Promise<void>;
  requestCreateAnnouncement: (data: FieldValues) => Promise<void>;
  requestDeleteAnnouncement: (id: string) => Promise<void>;
  navigate: NavigateFunction;
  user: IUser | null | undefined;
  isLoading: boolean;
  isOpenModalCreate: boolean;
  setIsOpenModalCreate: Dispatch<React.SetStateAction<boolean>>;
  isOpenModalEdit: boolean;
  setIsOpenModalEdit: Dispatch<React.SetStateAction<boolean>>;
  isOpenModalDelete: boolean;
  setIsOpenModalDelete: Dispatch<React.SetStateAction<boolean>>;
  productModal: any;
  setProdutModal: Dispatch<React.SetStateAction<any>>;
}

interface IAuthProvider {
  children: ReactNode;
}
export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isOpenModalCreate, setIsOpenModalCreate] = useState<boolean>(false);
  const [isOpenModalEdit, setIsOpenModalEdit] = useState<boolean>(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState<boolean>(false);
  const [productModal, setProdutModal] = useState(null);
  const navigate = useNavigate();

  const requestLogin = async (data: FieldValues): Promise<void> => {
    try {
      const res = await api.post("/user/login", data);
      localStorage.setItem("@lojaDeCarros:token", res.data.token);
      api.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
      navigate("/profile");
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        console.error(error.response?.data ?? "unknow error");
      } else {
        console.error(error);
      }
    }
  };

  const requestRegister = async (data: FieldValues): Promise<void> => {
    try {
      const res = await api.post("/user", data);
      navigate("/login");
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        console.error(error.response?.data ?? "unknow error");
      } else {
        console.error(error);
      }
    }
  };

  const requestCreateAnnouncement = async (
    data: FieldValues
  ): Promise<void> => {
    try {
      const res = await api.post("/user/announcement", data);
      setIsOpenModalCreate(false);
      console.log(res.data);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        console.error(error.response?.data ?? "unknow error");
      } else {
        console.error(error);
      }
    }
  };

  const requestDeleteAnnouncement = async (id: string): Promise<void> => {
    try {
      const res = await api.delete(`/user/announcement/${id}`);
      console.log(res.data);
      setIsOpenModalDelete(false);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        console.error(error.response?.data ?? "unknow error");
      } else {
        console.error(error);
      }
    }
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
      setIsLoading(false);
      /*  navigate("/", { replace: true }); */
    };
    requestProfile();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        requestLogin,
        navigate,
        user,
        isLoading,
        requestRegister,
        requestCreateAnnouncement,
        requestDeleteAnnouncement,
        isOpenModalCreate,
        setIsOpenModalCreate,
        isOpenModalEdit,
        setIsOpenModalEdit,
        isOpenModalDelete,
        setIsOpenModalDelete,
        productModal,
        setProdutModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
