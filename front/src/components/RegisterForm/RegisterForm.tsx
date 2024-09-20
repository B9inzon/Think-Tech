"use client"

import React, { useEffect, useState } from "react";
import { IRegisterErrorState, IRegisterFormState } from "@/Interfaces/IRegister";
import validateRegister from "@/helpers/validateRegister";
import { useRouter } from "next/navigation";
import { registerUser } from "@/helpers/Register.helper";

const RegisterForm: React.FC = () => {
  const router = useRouter();

  const inicialState: IRegisterFormState = {
    email: "",
    name:"",
    address: "",
    phone: "",
    password: "",
  };

  const [form, setForm] = useState<IRegisterFormState>(inicialState);
  const [errors, setErrors] = useState<IRegisterErrorState>(inicialState);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await registerUser(form)
    
    alert("¡Se ha registrado con éxito!")
    router.push("/login");
  };

  const formInputs = [
    { label: "Correo", name: "email", type: "text" },
    { label: "Nombre", name: "name", type: "text" },
    { label: "Dirección", name: "address", type: "text" },
    { label: "Telefono", name: "phone", type: "text" },
    { label: "Contraseña", name: "password", type: "password" },
  ];

  useEffect(() => {
    const errors = validateRegister(form)
    setErrors(errors);
  }, [form]);

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
            value={form[name as keyof IRegisterFormState]}
            placeholder={`Ingresar ${label}`}
            onChange={handleInputChange}
            className="p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors[name as keyof IRegisterErrorState] && (
            <span className="mt-1 text-red-500 text-md">
              {errors[name as keyof IRegisterErrorState]}
            </span>
          )}
        </div>
      ))}
      <button
        type="submit"
        disabled={Object.keys(form).some(
          (e) => !form[e as keyof IRegisterFormState]
        )}
        className="w-full px-5 py-3 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-400"
      >
        Enviar
      </button>
    </form>
  );
};

export default RegisterForm;
