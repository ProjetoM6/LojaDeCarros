import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { FieldValues } from "react-hook-form";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { IAnnouncement, IUser } from "./interfaces";
import { AxiosError } from "axios";
import api from "../services";

interface IAuthContext {
  requestLogin: (data: FieldValues) => Promise<void>;
  requestRegister: (data: FieldValues) => Promise<void>;
  requestSendResetPassword: (data: FieldValues) => Promise<void>;
  requestResetPassword: (data: FieldValues) => Promise<void>;
  requestCreateAnnouncement: (data: FieldValues) => Promise<void>;
  requestUpdateAnnouncement: (data: FieldValues) => Promise<void>;
  requestDeleteAnnouncement: (id: string) => Promise<void>;
  initialLetters: (names: string) => string;
  navigate: NavigateFunction;
  user: IUser | null | undefined;
  announcementUser: IAnnouncement[];
  setAnnouncementUser: Dispatch<SetStateAction<IAnnouncement[]>>;
  announcementView: IAnnouncement | null;
  setAnnouncementView: Dispatch<SetStateAction<IAnnouncement | null>>;
  isLoading: boolean;
  isOpenModalCreate: boolean;
  setIsOpenModalCreate: Dispatch<SetStateAction<boolean>>;
  isOpenModalEdit: boolean;
  setIsOpenModalEdit: Dispatch<SetStateAction<boolean>>;
  isOpenModalDelete: boolean;
  setIsOpenModalDelete: Dispatch<SetStateAction<boolean>>;
  productModal: IAnnouncement | null;
  setProdutModal: Dispatch<SetStateAction<IAnnouncement | null>>;
}

interface IAuthProvider {
  children: ReactNode;
}
export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null | undefined>();
  const [announcementUser, setAnnouncementUser] = useState<IAnnouncement[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isOpenModalCreate, setIsOpenModalCreate] = useState<boolean>(false);
  const [isOpenModalEdit, setIsOpenModalEdit] = useState<boolean>(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState<boolean>(false);
  const [productModal, setProdutModal] = useState<IAnnouncement | null>(null);
  const [announcementView, setAnnouncementView] =
    useState<IAnnouncement | null>(null);
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
      setAnnouncementUser([res.data, ...announcementUser]);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        console.error(error.response?.data ?? "unknow error");
      } else {
        console.error(error);
      }
    }
  };

  const requestUpdateAnnouncement = async (data: FieldValues) => {
    Object.keys(data).forEach((element) => {
      if (data[element] === "" || data[element] === null) {
        delete data[element];
      }
    });
    try {
      await api.patch(`/user/announcement/${productModal?.id}`, data);
      const announcementIndex = announcementUser.findIndex(
        (announcement) => announcement.id === productModal?.id
      );
      if (announcementIndex === -1) {
        throw new Error("announcement id not found");
      }
      announcementUser[announcementIndex] = {
        ...announcementUser[announcementIndex],
        ...data,
      };
      setIsOpenModalEdit(false);
    } catch (error) {
      console.error(error);
    }
  };

  const requestDeleteAnnouncement = async (id: string): Promise<void> => {
    try {
      await api.delete(`/user/announcement/${id}`);
      setAnnouncementUser(
        announcementUser.filter((announcement) => announcement.id != id)
      );
      setIsOpenModalDelete(false);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        console.error(error.response?.data ?? "unknow error");
      } else {
        console.error(error);
      }
    }
  };


  const requestSendResetPassword = async (data: FieldValues): Promise<void> => {
    try {
      const res = await api.post("/user/sendResetPassword", data);
      navigate("/resetPassword/")
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        console.error(error.response?.data ?? "unknow error");
      } else {
        console.error(error);
      }
    }
  };

  const requestResetPassword = async (data: FieldValues): Promise<void> => {
    try {
      const res = await api.patch("/user/resetPassword/newPassword", data);
      navigate("/login");
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        console.error(error.response?.data ?? "unknow error");
      } else {
        console.error(error);
      }
    }

  const initialLetters = (names: string) => {
    let letters: string = "";
    names.split(" ").forEach((name) => (letters += name[0]));
    return letters;
  };

  useEffect(() => {
    const requestProfile = async () => {
      const token = localStorage.getItem("@lojaDeCarros:token");
      if (token) {
        try {
          api.defaults.headers.common.authorization = `Bearer ${token}`;
          const { data } = await api.get("/user/profile");
          setUser(data);
          setAnnouncementUser(data.announcement);
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
        announcementUser,
        setAnnouncementUser,
        isLoading,
        requestRegister,
        requestCreateAnnouncement,
        requestUpdateAnnouncement,
        requestDeleteAnnouncement,
        requestSendResetPassword,
        requestResetPassword,
        isOpenModalCreate,
        setIsOpenModalCreate,
        isOpenModalEdit,
        setIsOpenModalEdit,
        isOpenModalDelete,
        setIsOpenModalDelete,
        productModal,
        setProdutModal,
        announcementView,
        setAnnouncementView,
        initialLetters,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
