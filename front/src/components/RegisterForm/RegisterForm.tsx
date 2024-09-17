"use client";

import React, { useEffect, useState } from "react";
import { RegisterErrorState, RegisterFormState } from "@/Interfaces/IRegister";
import validateRegister from "@/helpers/validateRegister"

const RegisterForm: React.FC = () => {
    
    const inicialState: RegisterFormState = {
      email: "",
      address: "",
      phone: "",
      password: "",
    };

  const [form, setForm] = useState<RegisterFormState>(inicialState);
  const [errors, setErrors] = useState<RegisterErrorState>(inicialState);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    setErrors(validateRegister({ ...form, [name]: value }));
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
    { label: "Correo", name: "email", type: "text" },
    { label: "Dirección", name: "address", type: "text" },
    { label: "Telefono", name: "phone", type: "text" },
    { label: "Contraseña", name: "password", type: "password" },
  ];

  useEffect(() => {}, [form]);


  return (
    <form onSubmit={handleOnSubmit}>
      {formInputs.map(({ label, name, type }) => (
        <div key={name}>
          <label htmlFor={name}>{label}</label>
          <input
            id={name}
            name={name}
            type={type}
            value={form[name as keyof RegisterFormState]}
            placeholder={`Ingresar ${label}`}
            onChange={handleInputChange}
          />
          {errors[name as keyof RegisterErrorState] && (
            <span style={{ color: "coral" }}>
              {errors[name as keyof RegisterErrorState]}
            </span>
          )}
        </div>
      ))}
      <button
        type="submit"
        disabled={Object.keys(form).some((e) => !form[e as keyof RegisterFormState])}
      >
        Enviar
      </button>
    </form>
  );
};

export default RegisterForm;
