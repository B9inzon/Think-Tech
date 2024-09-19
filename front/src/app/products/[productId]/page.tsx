
import { getProductById } from "@/helpers/productsDB.helper";
import ProductDetail from "@/views/ProductDetailView/ProductDetailView";
import React from "react";

const Detail: React.FC<{params: {productId: string}}> = async ({params}) => {
  const product = await getProductById(params.productId)
  return (
    <ProductDetail {...product}/>
  )
};

export default Detail;
