"use client";

import { IUserSession } from "@/Interfaces/IUserSession";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const pathName = usePathname();
  const [userData, setUserData] = useState<IUserSession>();

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedData = JSON.parse(localStorage.getItem("userSession")!);
      setUserData(storedData);
    }
  }, [pathName]);

  console.log(userData);

  return (
    <div className="w-screen text-lg flex items-center justify-center bg-[#b6b3b9]">
      <nav className="flex flex-row items-center justify-between w-9/12 h-24">
        <div>
          <Link href="/">
            <img
              className="rounded-full max-h-16"
              src="https://static.vecteezy.com/system/resources/thumbnails/006/298/276/small/gear-smart-eps-icon-digital-tech-business-logo-free-vector.jpg"
              alt="logo"
            />
          </Link>
        </div>
        <div className="w-3/5 text-[#363537] font-black flex flex-row items-center justify-between content-between gap-[6vw]">
          <Link
            className=" hover:scale-[1.2] transition duration-500 ease-in-out "
            href="/"
          >
            Home
          </Link>

          <Link
            className=" hover:scale-[1.2] transition duration-500 ease-in-out"
            href="/about"
          >
            Acerca de nosotros
          </Link>

          {userData?.user.email ? (
              <Link
                //!Perfil
                className=" hover:scale-[1.2] transition duration-500 ease-in-out"
                href="/dashboard"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  className=" transition duration-500 ease-in-out"
                >
                  <path
                    d="M31.5 9C31.5 10.9891 30.7098 12.8968 29.3033 14.3033C27.8967 15.7098 25.9891 16.5 24 16.5C22.0108 16.5 20.1032 15.7098 18.6967 14.3033C17.2901 12.8968 16.5 10.9891 16.5 9C16.5 7.01088 17.2901 5.10322 18.6967 3.6967C20.1032 2.29018 22.0108 1.5 24 1.5C25.9891 1.5 27.8967 2.29018 29.3033 3.6967C30.7098 5.10322 31.5 7.01088 31.5 9ZM9.00195 37.236C9.06622 33.3007 10.6746 29.5483 13.4803 26.7881C16.286 24.0279 20.0641 22.4809 24 22.4809C27.9358 22.4809 31.7139 24.0279 34.5196 26.7881C37.3253 29.5483 38.9337 33.3007 38.998 37.236C34.2927 39.3935 29.1762 40.507 24 40.5C18.648 40.5 13.568 39.332 9.00195 37.236Z"
                    stroke="#363537"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
          ) : (
            //!Login
            <Link
              className=" hover:scale-[1.2] transition duration-500 ease-in-out"
              href="/login"
            >
              Iniciar sesión
            </Link>
          )}

          {userData?.user.email ? (
              <Link
                //!Cart
                className=" hover:scale-[1.2] transition duration-500 ease-in-out flex gap-2 flex-row"
                href="/cart"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="32"
                  viewBox="0 0 48 41"
                  fill="none"
                  className=" transition duration-500 ease-in-out"
                >
                  <path
                    d="M1 1H4.28775C5.49752 1 6.55311 1.74317 6.86623 2.80917L7.77475 5.92267M7.77475 5.92267C20.9889 5.58443 34.1904 6.92616 47 9.90933C45.0454 15.2263 42.7231 20.3917 40.0639 25.375H13.4536M7.77475 5.92267L13.4536 25.375M13.4536 25.375C11.5662 25.375 9.75615 26.0598 8.42158 27.2788C7.08701 28.4978 6.33725 30.1511 6.33725 31.875H43.698M9.89542 38.375C9.89542 38.806 9.70798 39.2193 9.37434 39.5241C9.0407 39.8288 8.58818 40 8.11634 40C7.64449 40 7.19198 39.8288 6.85833 39.5241C6.52469 39.2193 6.33725 38.806 6.33725 38.375C6.33725 37.944 6.52469 37.5307 6.85833 37.226C7.19198 36.9212 7.64449 36.75 8.11634 36.75C8.58818 36.75 9.0407 36.9212 9.37434 37.226C9.70798 37.5307 9.89542 37.944 9.89542 38.375ZM40.1399 38.375C40.1399 38.806 39.9524 39.2193 39.6188 39.5241C39.2851 39.8288 38.8326 40 38.3608 40C37.8889 40 37.4364 39.8288 37.1028 39.5241C36.7691 39.2193 36.5817 38.806 36.5817 38.375C36.5817 37.944 36.7691 37.5307 37.1028 37.226C37.4364 36.9212 37.8889 36.75 38.3608 36.75C38.8326 36.75 39.2851 36.9212 39.6188 37.226C39.9524 37.5307 40.1399 37.944 40.1399 38.375Z"
                    stroke="#363537"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
          ) : (
            <Link
              //!Register
              className=" hover:scale-[1.2] transition duration-500 ease-in-out flex gap-2 flex-row"
              href="/register"
            >
              Registrarse
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
