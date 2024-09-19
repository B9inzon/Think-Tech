import React from "react";

const CartView = () => {
  return (
    <div className="flex flex-col items-center w-screen h-screen ">
      <h1 className="my-8 text-3xl font-bold text-[#363537]">Mi carrito</h1>
      <div className=" flex flex-row h-screen w-[80%] bg-[#b6b3b9] p-4 justify-center rounded-t-xl gap-8">
        <div className="flex flex-row h-1/4 bg-[#dad9dc] w-[50%] p-4 items-center justify-around rounded-xl">
          <div className="flex items-start justify-center w-[20%] h-full">
            <img
              className="max-h-[220px] max-w-20"
              src="https://products.eneba.games/resized-products/s29Db6ZBVLneuD0t66qnYRamvGDP3p8chLz-3IomxcU_350x200_1x-0.jpeg"
              alt="GTA V"
            />
          </div>
          <div className="flex flex-col items-center w-[80%] h-full">
            <div className="flex flex-col h-[70%] items-start justify-start p-2">
              <h2 className="font-semibold">GTA V</h2>
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Maiores totam cum eius et exercitationem sint asperiores quo,
                officia, nemo eos consectetur autem harum laborum provident!
              </p>
            </div>
            <div className="flex items-center justify-end w-full h-full p-2">
              <h3 className="text-lg font-bold">Precio $50.000</h3>
            </div>
          </div>
        </div>

        <div className="bg-[#dad9dc] flex flex-col w-[30%] h-1/2 p-4 rounded-xl  justify-normal">
          <div className="items-center font-semibold h-[10%]">
            <h1 className="text-2xl text-[#363537]">Resumen</h1>
          </div>
          <div className=" flex h-[30%] items-center justify-center">
            <button className=" rounded-xl h-[45%] w-[70%] bg-yellow-400">Continuar con la compra</button>
          </div>
          <hr className="border-gray-500" />
          <div className="flex items-center justify-center m-5">
            <h2 className="text-3xl text-[#363537]">Total: $50.000</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartView;
