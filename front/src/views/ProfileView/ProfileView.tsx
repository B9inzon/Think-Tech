"use client";
import { IUserSession } from "@/Interfaces/IUserSession";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProfileView = () => {
  const router = useRouter();

  const [userData, setUserData] = useState<IUserSession | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedData = localStorage.getItem("userSession")!;
      if (storedData) {
        const parsedData: IUserSession = JSON.parse(storedData);
        setUserData(parsedData);
      }
    }
  }, []);

  const { name, address, email, phone, role } = userData?.user || {};

  console.log(userData);

  const handleOnClick = () => {
    if (window.confirm(`¿Desea cerrar sesión?`)) {
      localStorage.removeItem("userSession");
      router.push("/");
    }
  };

  return (
    <div className="w-screen h-full flex flex-col justify-start items-center p-2 text-[#363537] content-center mt-8 ">
      <div className="w-4/5 h-screen m-6 flex flex-row justify-evenly items-start text-xl p-8 ">
        {/* Contenedor Izquierdo con el botón y el link */}
        <div className=" h-[50%] w-[30%] flex flex-col items-center justify-start p-8 rounded-xl bg-[#fefefe] shadow-xl">
          <h1 className="text-3xl font-semibold text-[#363537] mb-10  w-80 rounded-xl text-center flex items-center justify-center">
            Tu perfil
          </h1>

          <hr className="border-gray-600 rounded-lg mb-20 w-full"/>

          <div className=" w-full flex items-center justify-center mb-10">
            <div className="h-10 border w-64 rounded-xl hover:bg-yellow-100 hover: transition duration-500 ease-in-out flex items-center justify-center p-1 shadow-lg text-[#363537] hover:scale-[1.05]">
              <Link href="/dashboard/purchases">Historial de compras</Link>
            </div>
          </div>

          <div className=" w-full flex items-center justify-center ">
            <button
              className="h-10 border w-60 rounded-xl hover:bg-red-200  shadow-lg text-[#363537] bg-red-50 hover:scale-[1.05] hover: transition duration-700 ease-in-out"
              onClick={handleOnClick}
            >
              Cerrar sesión
            </button>
          </div>
        </div>

        {/* Contenedor Derecho */}
        <div className=" h-[50%] w-[50%] flex flex-col justify-center items-center rounded-xl shadow-xl bg-[#fefefe]">
          <div className="font-bold">
            <h3>¡Qué gusto verte por aquí {name}!</h3>
          </div>
          <div className="items-start m-8">
            <div>
              <p>
                La dirección de envio registrada es:
                <span className="font-semibold"> {address}</span>
              </p>
            </div>
            <div>
              <p>
                El número de telefono registrado es:
                <span className="font-semibold"> {phone}</span>
              </p>
            </div>
            <div>
              <p>
                El correo electrónico registrado es:
                <span className="font-semibold"> {email}</span>
              </p>
            </div>
            <div>
              <p>
                Tu rol es:
                <span className="font-semibold"> {role}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
