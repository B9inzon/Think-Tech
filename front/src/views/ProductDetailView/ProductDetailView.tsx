
"use client";

import { IProduct } from "@/Interfaces/IProduct";
import { IUserSession } from "@/Interfaces/IUserSession";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ProductDetail: React.FC<IProduct> = ({
  image,
  name,
  description,
  price,
  id, 
  categoryId
}) => {
  const router =  useRouter();
  const [userData, setUserData] = useState<IUserSession>();

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedData = JSON.parse(localStorage.getItem("userSession")!);
      setUserData(storedData);
    }
  }, []); 

  const handleAddToCart = () => {
    if(!userData?.token){
      // alert("Debe iniciar sesión para poder agregar productos al carrito.");
      Swal.fire({
        text: "Debes iniciar sesión para poder agregar productos al carrito.",
        icon: "warning"
      });
    } else {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");

      const productExist = cart.some((product: IProduct) => product.id === id);

      if(productExist){
        // alert("El producto ya se encuentra en tu carrito.");
        Swal.fire({
          icon: "warning",
          text: "Este producto ya se encuentra en tu carrito.",
        });
        
        router.push("/cart");
      } else {
        cart.push({ image, name, description, price, categoryId, id });
        localStorage.setItem("cart", JSON.stringify(cart));
        // alert("Producto agregado al carrito con éxito");
        Swal.fire({
          text:"Producto agregado al carrito",
          icon:  "success"

        });
      }
    }
  };

  return (
    <div className="flex flex-col items-center w-screen min-h-screen">
      <h1 className="my-8 text-3xl font-bold text-[#363537]">
        Detalle del producto
      </h1>
      <div className="flex flex-col lg:flex-row lg:h-full w-[90%] lg:w-[80%] p-4 justify-center rounded-t-xl gap-8">
        <div className="flex flex-col lg:flex-row items-center justify-around w-full h-auto p-4 rounded-xl border shadow-xl bg-[#fefefe]">
          <div className=" lg:w-[30%] p-4">
            <img className="w-full h-auto rounded-xl" src={image} alt={name} />
          </div>
          <div className="w-full lg:w-[50%] p-4">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl lg:text-3xl font-semibold">{name}</h2>
              <p className="text-sm lg:text-base">{description}</p>
              <h3 className="text-xl lg:text-2xl font-bold">Precio: ${price}</h3>
            </div>
            <button
              className="mt-6 lg:mt-8 py-2 lg:py-3 px-4 lg:px-6 bg-yellow-300 hover:bg-yellow-400 font-bold text-lg lg:text-xl rounded-xl transition duration-500 ease-in-out"
              onClick={handleAddToCart}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

