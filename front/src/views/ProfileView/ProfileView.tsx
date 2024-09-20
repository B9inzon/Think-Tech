"use client";
import { useRouter } from "next/navigation";
import React from "react";

const ProfileView = () => {
  const router = useRouter();

  const handleOnClick = () => {

    if(
      window.confirm(
        `¿Desea cerrar sesión?`
      )
    ){
    localStorage.removeItem("userSession");
    alert("Ha cerrado sesión correctamente")
    router.push("/");
  }
  };

  return (
    <div className=" w-screen h-full flex flex-col justify-start items-center p-2  text-[#363537]">
      <h1 className="text-3xl mt-5 ">Tu perfil</h1>
      <div className="w-4/5 h-screen m-6 flex flex-col justify-start items-center text-xl p-8 ">
        <div className="font-bold">
          <h3>Bienvenido Usuario</h3>
        </div>
        <div className="items-start m-8">
          <div>
            <p>
              La dirección de envio registrada es:{" "}
              <span className="font-semibold">Bogotá, Colombia</span>
            </p>
          </div>
          <div>
            <p>
              El correo electrónico registrado es:{" "}
              <span className="font-semibold">ejemplo@gmail.com</span>
            </p>
          </div>
        </div>
        <button className="h-8 border w-60 rounded-xl hover:bg-red-100 hover: transition duration-500 ease-in-out" onClick={handleOnClick}>
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default ProfileView;
