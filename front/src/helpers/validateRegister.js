const addressRegex = /^[A-Za-z0-9\s,'.-/#]{2,50}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const hasLetter = /[a-zA-Z]/;
const hasDigit = /\d/;
const hasSpecialChar = /[@$!%*?&]/;
const hasMinLength = /.{4,}/;
const hasMinLengthPhone = /.{10,}/;
const onlyNumbers = /^\d+$/;

export default function validateRegister({
  email,
  address,
  phone,
  password,
}) {  
  const errors = {};

  
  if (!email) {
    errors.email = "El campo 'Email' es obligatorio.";
  } else {
    if (!emailRegex.test(email)) {
      errors.email = "Debe seguir un formato de email válido.";
    }
  }

  if (!address) {
    errors.address = "El campo 'Nombre' es obligatorio.";
  } else {
    if (!addressRegex.test(address)) {
      errors.address = "Debe tener una longitud máxima de 50 carácteres.";
    }
  }

  if (!phone) {
    errors.phone = "El campo 'Email' es obligatorio.";
  } else {
    if (!hasMinLengthPhone.test(phone)) {
      errors.phone = "Debe tener una longitud mínima de 10 caracteres.";
    }
    if(!onlyNumbers.test(phone)){
      errors.phone = "Solo se permiten números en el campo 'Teléfono'.";
    }
  }

  if (!password) {
    errors.password = "El campo 'Contraseña' es obligatorio.";
  } else {
    if (!hasLetter.test(password)) {
      errors.password = "Debe contener al menos una letra mayúscula.";
    }
    if (!hasDigit.test(password)) {
      errors.password = "Debe tener al menos un número.";
    }
    if (!hasSpecialChar.test(password)) {
      errors.password = "Debe tener al menos un carácter especial (@$!%*?&).";
    }
    if (!hasMinLength.test(password)) {
      errors.password = "Debe tener una longitud mínima de 4 caracteres.";
    }
  }

  return errors;
}
