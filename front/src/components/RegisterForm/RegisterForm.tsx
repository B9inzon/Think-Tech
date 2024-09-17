"use client";

import React, { useEffect, useState } from "react";
import { RegisterErrorState, RegisterFormState } from "@/Interfaces/IRegister";
import validateRegister from "@/helpers/validateRegister";

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
    alert("Ha ingresado correctamente");
    setForm(inicialState);
  };

  const formInputs = [
    { label: "Correo", name: "email", type: "text" },
    { label: "Dirección", name: "address", type: "text" },
    { label: "Telefono", name: "phone", type: "text" },
    { label: "Contraseña", name: "password", type: "password" },
  ];

  useEffect(() => {}, [form]);

  return (
    <form
      onSubmit={handleOnSubmit}
      className="w-1/4 p-6 mx-auto space-y-6 rounded-lg shadow-lg bg-[#e1e0e3]"
    >
      {formInputs.map(({ label, name, type }) => (
        <div key={name} className="flex flex-col">
          <label
            htmlFor={name}
            className="mb-2 font-medium text-gray-700 text-md"
          >
            {label}
          </label>
          <input
            id={name}
            name={name}
            type={type}
            value={form[name as keyof RegisterFormState]}
            placeholder={`Ingresar ${label}`}
            onChange={handleInputChange}
            className="p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors[name as keyof RegisterErrorState] && (
            <span className="mt-1 text-red-500 text-md">
              {errors[name as keyof RegisterErrorState]}
            </span>
          )}
        </div>
      ))}
      <button
        type="submit"
        disabled={Object.keys(form).some(
          (e) => !form[e as keyof RegisterFormState]
        )}
        className="w-full px-5 py-3 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-400"
      >
        Enviar
      </button>
    </form>
  );
};

export default RegisterForm;
