import { IAddressCreate } from "../address";

export interface ICreateUser {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  date_of_birth: string;
  description: string;
  type: string;
  password: string;
  cep: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement: string;
}
