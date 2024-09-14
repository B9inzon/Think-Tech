import ProductCard from "@/components/productCard/ProductCard";
import { productsArray } from "@/helpers/productsArray";
import React from "react";
import styles from "@/views/MyProducts/MyProducts.module.css";

const MyProducts = () => {
  return (
    <div className={styles.myProductsContainer}>
        <h1>My Products</h1>
      <div className={styles.myProducts}>
        <hr />
        {productsArray.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
};

export default MyProducts;
