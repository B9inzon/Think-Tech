

import { IProduct } from "@/Interfaces/IProduct";
import React from 'react'

const ProductDetail: React.FC<IProduct> = ({image, name, description, price}) => {
  return (
    <div>
      <h1>Detalle del producto</h1>
      <div>
        <img src= {image} alt={name}/>
        <h3>  {name} </h3>
        <p>  {description} </p>
        <p> {price} </p>
      </div>
    </div>
  )
}

export default ProductDetail