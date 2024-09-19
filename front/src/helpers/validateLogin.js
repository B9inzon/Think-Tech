

export default function validateLogin ({email, password}) {
    const errors = {};
    if(!email) errors.email = "Ingresar email";
    if(!password) errors.password = "Ingresar contraseña";

    return errors;
}