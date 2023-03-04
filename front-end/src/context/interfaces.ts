export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  createdAt: string | Date;
  cpf: string;
  date_of_birth: string;
  type: string;
  description?: string;
  announcement: IAnnouncement[] | [];
}

export interface IAnnouncement {
  id: string;
  type: string;
  title: string;
  year: string;
  km: string;
  price: string;
  type_vehicle: string;
  img_cover: string;
  createdAt: string | Date;
  isActive: true;
  description: string | null;
  ownerId: string;
  ownerName: string;
  ownnerImg: string;
}
