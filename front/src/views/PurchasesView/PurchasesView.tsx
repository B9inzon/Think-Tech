"use client";

import { getPurchases } from "@/helpers/purchasesDB.helper";
import { IPurchase } from "@/Interfaces/IPurchase";
import { IUserSession } from "@/Interfaces/IUserSession";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const PurchasesView = () => {
  const router = useRouter();
  const [purchases, setPurchases] = useState<IPurchase[]>([]);
  const [userData, setUserData] = useState<IUserSession>();



  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userData = JSON.parse(localStorage.getItem("userSession")!);
      setUserData(userData);
    }
  }, []);

  const fetchData = async () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    const purchasesResponse = await getPurchases(userData?.token!);
    setPurchases(purchasesResponse);
  };

  useEffect(() => {
    if (userData === undefined) {
      return;
    }

    if (!userData || !userData.user.name) {
      router.push("/login");
    } else {
      fetchData();
    }
  }, [userData?.user]);

  return (
    <div className="flex flex-col items-center w-screen h-screen ">
      <h1 className="my-8 text-3xl font-bold text-[#363537]">Mis compras</h1>
      {purchases && purchases.length > 0 ? (
        purchases.map((purchases: IPurchase) => {
          return (
            <div
              key={purchases.id}
              className="flex flex-row h-20 bg-[#f7f7f8] w-[70%] p-2 mb-5 items-center justify-around rounded-xl shadow-lg"
            >
              <div className="flex flex-row h-full w-full items-center justify-evenly ">
                <h3 className="text-lg font-medium">
                  Fecha de la compra:{" "}
                  <span className="text-lg font-semibold">
                    {new Date(purchases.date)?.toDateString()}
                  </span>
                </h3>
                <p className="text-lg font-medium">
                  Items comprados: {purchases.products.length}
                </p>
                <h3 className="text-lg font-medium">
                  Estado de la compra:{" "}
                  <span className="text-lg font-semibold">
                    {purchases.status}
                  </span>
                </h3>
                {/* <h3 className="text-lg font-medium">
                  Total:{" "}
                  <span className="text-lg font-semibold">
                    {totalCart.}
                  </span>
                </h3> */}
              </div>
            </div>
          );
        })
      ) : (
        <div className="flex flex-row h-1/4 bg-[#dad9dc] w-[50%] p-4 items-center justify-center rounded-xl shadow-lg">
          <div className="flex flex-col items-center justify-center w-[80%] h-full ">
            <div className="flex flex-col h-[70%] items-center justify-center p-2 ">
              <p className="text-xl font-semibold">
                No tienes compras registradas
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PurchasesView;
