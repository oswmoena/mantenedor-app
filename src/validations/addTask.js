import * as Yup from "yup";

export const addTaskSchema = Yup.object().shape({
  title: Yup.string().required("Debes ingresar un nombre"),
  description: Yup.string().required(
    "Debe ingresar una descripción para la tarea"
  ),
});
