import { ILoginFormState } from "@/Interfaces/ILogin";
import { IRegisterFormState } from "@/Interfaces/IRegister";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function registerUser(formData: IRegisterFormState) {
  try {
    const res = await fetch(`${API_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      return res.json();
    } else {
      alert("Error al registrarse");
      throw new Error("Error al registrarse");
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Se produjo un error desconocido");
    }
  }
}

export async function loginUser(formData: ILoginFormState) {
  try {
    const res = await fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      return res.json();
    } else {
      alert("Error al iniciar sesión");
      throw new Error("Error al iniciar sesión");
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("Se produjo un error desconocido");
    }
  }
}
