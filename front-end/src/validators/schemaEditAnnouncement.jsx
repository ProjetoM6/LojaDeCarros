import * as yup from "yup";

const formSchemaEditAnnouncement = yup.object().shape({
  type: yup.string().nullable().notRequired(),
  title: yup.string().nullable().notRequired(),
  year: yup.string().nullable().notRequired(),
  km: yup.string().nullable().notRequired(),
  price: yup.string().nullable().notRequired(),
  description: yup.string().nullable().notRequired(),
  type_vehicle: yup.string().nullable().notRequired(),
  published: yup.string().nullable().notRequired(),
  img_cover: yup.string().nullable().notRequired(),
  img_gallery: yup.string().nullable().notRequired(),
});

export default formSchemaEditAnnouncement;
