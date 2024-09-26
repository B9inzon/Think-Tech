"use client";

import { createPurchase } from "@/helpers/purchasesDB.helper";
import { IProduct } from "@/Interfaces/IProduct";
import { IUserSession } from "@/Interfaces/IUserSession";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const CartView = () => {
  const [cart, setCart] = useState<IProduct[]>([]);
  const [totalCart, setTotalCart] = useState<number>(0);
  const [userData,  setUserData] = useState<IUserSession>();
  const [totalItems, setTotalItems] = useState<number>(0);



  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      if (storedCart) {
        let totalCart = 0;
        storedCart?.map((item: IProduct) => {
          totalCart = totalCart + item.price;
        });
        setTotalCart(totalCart);
        setCart(storedCart);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      if (storedCart) {
        let totalItems = 0;
        storedCart?.map(() => {
          totalItems = totalItems + 1;
        });
        setTotalItems(totalItems);
        setCart(storedCart);
      }
    }
  }, []);



  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userData = JSON.parse(localStorage.getItem("userSession")!);
      setUserData(userData);
      
    }
  }, []);

  const handleOnClick = async () => {
    const idProduct = cart?.map((product) =>product.id)
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    await createPurchase(idProduct,  userData?.token!)
    alert("Compra realizada con éxito")
    setCart([])
    setTotalCart(0)
    localStorage.setItem("cart", "[]")
  }

  return (
    //! div padre
    <div className="flex flex-col items-center w-screen h-screen ">
      {/*//! div del titulo de la página*/}
      <h1 className="my-8 text-3xl font-bold text-[#363537]">Mi carrito</h1>
      {/*//!div que contiene los productos y el total*/}
      <div className=" flex flex-row h-screen w-[80%]  p-4 justify-center rounded-t-xl gap-8 ">
        <div className=" w-[50%] items-center justify-center ">
          {cart && cart.length > 0 ? (
            cart.map((cart: IProduct) => {
              return (
                <div
                  key={cart.id}
                  className="flex flex-row h-[18%]  w-full p-4 mb-5 items-center justify-around border rounded-xl shadow-xl bg-[#fefefe]"
                >
                  <div className="flex items-start justify-center w-[20%] h-full ">
                    <img
                      className="max-h-[220px] max-w-20"
                      src={cart.image}
                      alt={cart.name}
                    />
                  </div>
                  <div className="flex flex-col items-center w-[80%] h-full p-1">
                    <div className="flex flex-col h-[70%] w-full items-start justify-center p-2">
                      <h2 className="text-xl font-semibold">{cart.name}</h2>
                    </div>
                    <div className="flex items-center justify-between w-full h-[30%] p-4 ">
                      <h4 className="text-sm underline">Eliminar</h4>
                      <h3 className="text-lg font-bold">
                        Precio: ${cart.price}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="flex flex-row h-1/4 border w-full p-4 items-center justify-center rounded-xl shadow-xl bg-[#fefefe]">
              <div className="flex flex-col items-center justify-center w-[80%] h-full ">
                <div className="flex flex-col h-[70%] items-center justify-center p-2 ">
                  <p className="text-xl font-semibold">
                    Tu carrito está vacío
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/*//!div que contiene el total*/}
        <div className="border flex flex-col w-[30%] h-1/2 p-4 rounded-xl  justify-normal shadow-xl bg-[#fefefe]">
          <div className="items-center font-semibold h-[10%]">
            <h1 className="text-2xl text-[#363537]">Resumen</h1>
          </div>

          {
            cart && cart.length <= 0 ? (
              <div className=" flex h-[30%] items-center justify-center ">
              <Link href="/" className="flex items-center rounded-xl h-[45%] w-[70%] bg-yellow-400 font-semibold justify-center shadow-xl text-center">
                Seguir comprando
              </Link>
            </div>
            ):(
              <div className=" flex h-[30%] items-center justify-center">
            <button onClick={handleOnClick} className=" rounded-xl h-[45%] w-[70%] bg-yellow-300 hover:bg-yellow-400  hover: transition duration-500 ease-in-out font-semibold shadow-lg hover:scale-[1.05]">
              Finalizar la compra
            </button>
          </div>
            )
          }          
          <hr className="border-gray-500 rounded-lg" />
          <div className="flex flex-col items-center justify-center m-5">
            <h2 className="text-lg text-[#363537] font-medium mb-3">{totalItems}  items</h2>

            <h2 className="text-3xl text-[#363537] font-bold">Subtotal: ${totalCart}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartView;
