import * as yup from "yup";

export const formSchemaCreateAnnouncement = yup.object().shape({
  type: yup.string().required("Escolha uma opção"),
  title: yup.string().required("Campo obrigatório"),
  year: yup.string().required("Campo obrigatório"),
  km: yup.string().required("Campo obrigatório"),
  price: yup.string().required("Campo obrigatório"),
  description: yup.string().required("Campo obrigatório"),
  type_vehicle: yup.string().required("Campo obrigatório"),
  img_cover: yup.string().required("Campo obrigatório"),
  img_gallery: yup.string().required("Campo obrigatório"),
});
