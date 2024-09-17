
"use client"

import ProductCard from "@/components/productCard/ProductCard";
import React, { useEffect, useState } from "react";
import styles from "@/components/ProductsList/ProductsList.module.css";
import axios from "axios";
import { IProduct } from "@/Interfaces/IProduct";

const ProductsList = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [error, setError] = useState<string  | null>(null);

  useEffect(()=>{
    axios<IProduct[]>('http://localhost:3003/products')
    .then((res) => {
      setProducts(res.data);
    })
    .catch((error)=> {
      setError(`Error al obtener la información: ${error?.message}`);
    }); 
  },[]);

  return (
    <div className={styles.myProductsContainer}>
      <div className="w-full p-2 mt-5 flex items-center text-[#363537] justify-center">
      <h1 className="text-3xl">Principales productos</h1>
      </div>
      <div className={styles.myProducts}>
        <hr />
        {products &&
          products?.map((product) => {
            return <ProductCard key={product.id}{...product} />;
          })}
      </div>
    </div>
  );
};

export default ProductsList;



