"use client"


import { IProduct } from "@/Interfaces/IProduct";
import { IUserSession } from "@/Interfaces/IUserSession";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

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
    //? si no existe el token de usuario alerta que debe iniciar sesión para agregar productos al carrito
    if(!userData?.token){
      alert("Debe iniciar sesión para poder agregar productos al carrito.")
    }else{
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");

      //? se valida que el producto ya existe en el array cart
      const productExist = cart.some((product: IProduct) =>{
        if(product.id === id) return true;
        return false
      })

      //? si el producto ya existe en el array se alerta que el producto ya existe en el carrito
      if(productExist){
        alert("El producto ya se encuentra en tu carrito.")
        router.push("/cart")
        //? si el producto no existe en el array se hace push al array
      } else {
        cart.push({
          image, name, description, price, categoryId, id
        })
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Producto agregado al carrito con éxito");
      }
    }
  };

  return (
    <div className="flex flex-col items-center w-screen h-screen ">
      <h1 className="my-8 text-3xl font-bold text-[#363537]">
        Detalle del producto
      </h1>
      <div className=" flex flex-row h-screen w-[80%]  p-4 justify-center rounded-t-xl gap-8">
        <div className="flex flex-row h-[80%]  w-[80%] p-4 items-center justify-around rounded-xl border shadow-xl">
          <div className="flex items-center justify-center w-[50%] h-full">
            <img className="w-full  h-[40% rounded-xl" src={image} alt={name} />
          </div>
          <div className="flex flex-col items-center w-[80%] h-full p-2">
            <div className="flex flex-col h-[60%] w-[70%] items-start justify-evenly p-2 ">
              <h2 className="text-3xl font-semibold ">{name}</h2>
              <p className="text-md">{description}</p>
            </div>
            <div className="flex items-center justify-center w-full p-2 h-[20%]">
              <h3 className="text-2xl font-bold">Precio: ${price}</h3>
            </div>
            <div className="flex items-center justify-center w-full p-2  h-[20%]">
              <button className=" rounded-xl h-[45%] w-[70%] bg-yellow-400 font-bold text-xl" onClick={handleAddToCart}>Agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ProductDetail;
