import ProductCard from "@/components/productCard/ProductCard";
import { productsArray } from "@/helpers/productsArray";
import React from "react";
import styles from "@/components/ProductsList/ProductsList.module.css";

const ProductsList = () => {
  const products = productsArray;

  return (
    <div className={styles.myProductsContainer}>
      <h1>Best Offers</h1>
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
