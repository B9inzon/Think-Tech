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
    alert("Ha ingresado correctamente");
    setForm(inicialState);
  };

  const formInputs = [
    { label: "Email", name: "email", type: "text" },
    { label: "Contraseña", name: "password", type: "password" },
  ];

  useEffect(() => {
    const errors = validateLogin(form);
    setErrors(errors);
  }, [form]);

  return (
    <form
      onSubmit={handleOnSubmit}
      className="w-1/4 p-6 mx-auto space-y-6 rounded-lg shadow-lg bg-[#e1e0e3] "
    >
      {formInputs.map(({ label, name, type }) => (
        <div key={name} className="flex flex-col">
          <label
            htmlFor={name}
            className="mb-2 text-sm font-medium text-gray-700"
          >
            {label}
          </label>
          <input
            id={name}
            name={name}
            type={type}
            value={form[name as keyof LoginFormState]}
            placeholder={`Ingresar ${label}`}
            onChange={handleInputChange}
            className="p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors[name as keyof LoginErrorState] && (
            <span className="mt-1 text-red-500 text-md">
              {errors[name as keyof LoginErrorState]}
            </span>
          )}
        </div>
      ))}
      <button
        type="submit"
        disabled={Object.keys(form).some(
          (e) => !form[e as keyof LoginFormState]
        )}
        className="w-full px-5 py-3 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-400"
      >
        Enviar
      </button>
    </form>
  );
};

export default LoginForm;
