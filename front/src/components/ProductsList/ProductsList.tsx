
import ProductCard from "@/components/productCard/ProductCard";
import React from "react";
import styles from "@/components/ProductsList/ProductsList.module.css";
import Link from "next/link";
import { getProductsFromDb } from "@/helpers/productsDB.helper";

const ProductsList = async () => {
  3
  const products = await getProductsFromDb();
  return (
    <div className={styles.myProductsContainer}>
      <div className="w-full p-2 mt-5 flex items-center text-[#363537] justify-center">
      <h1 className="text-3xl">Principales productos</h1>
      </div>
      <div className={styles.myProducts}>
        <hr />
        {products &&
          products?.map((product) => {
            return( 
              <Link className="hover:scale-[1.05] transition duration-500 ease-in-out" href={`/products/${product.id}`} key={product.id}>
                  <ProductCard {...product} />
              </Link>
          )})}
      </div>
    </div>
  );
};

export default ProductsList;