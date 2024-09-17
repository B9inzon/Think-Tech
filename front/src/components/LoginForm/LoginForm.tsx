"use client";

import React, { useEffect, useState } from "react";
import validateLogin from "@/helpers/validateLogin";
import { LoginErrorState, LoginFormState } from "@/Interfaces/ILogin";

const LoginForm: React.FC = () => {
    
    const inicialState: LoginFormState = {
      email: "",
      password: "",
    };

  const [form, setForm] = useState<LoginFormState>(inicialState);
  const [errors, setErrors] = useState<LoginErrorState>(inicialState);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    setErrors(validateLogin({ ...form, [name]: value }));
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = {
      email: form.email,
      password: form.password,
    };
    alert("Ha ingresado correctamente")
    setForm(inicialState
    )   
  };

  const formInputs = [
    { label: "Email", name: "email", type: "text" },
    { label: "Contraseña", name: "password", type: "password" },
  ];

  useEffect(() => {
    const errors =  validateLogin(form);
    setErrors(errors)
  }, [form]);


  return (
    <form onSubmit={handleOnSubmit}>
      {formInputs.map(({ label, name, type }) => (
        <div key={name}>
          <label htmlFor={name}>{label}</label>
          <input
            id={name}
            name={name}
            type={type}
            value={form[name as keyof LoginFormState]}
            placeholder={`Ingresar ${label}`}
            onChange={handleInputChange}
          />
          {errors[name as keyof LoginErrorState] && (
            <span style={{ color: "coral" }}>
              {errors[name as keyof LoginErrorState]}
            </span>
          )}
        </div>
      ))}
      <button
        type="submit"
        disabled={Object.keys(form).some((e) => !form[e as keyof LoginFormState])}
      >
        Enviar
      </button>
    </form>
  );
};

export default LoginForm;
