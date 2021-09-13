import { validateProps } from "../../common/types";

export default function validate(values: validateProps) {
  let errors = {} as validateProps;

  if (!values.name) {
    errors.name = "Tu nombre es requerido";
  }
  if (!values.email) {
    errors.email = "Tu correo electronico es requerido";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "El correo ingresado no es valido";
  }
  if (!values.message) {
    errors.message = "Este campo es requerido";
  }
  return errors;
}
