


import axios from 'axios';
import ProductDetail from '@/components/ProductDetail/ProductDetail';
import { IProduct } from '@/Interfaces/IProduct';
import React from 'react'




const  ProductDetailAxios = async (id:number): Promise<IProduct> => {
  try {
    const { data } = await axios<IProduct>(`http://localhost:3003/products/${id}`)

    return data;
  } catch (error) {
    throw new Error('No se pudo cargar el producto');    
  }
}

const Product = async ({ params }: { params: { id: number } }) => {

  try {
    const product = await ProductDetailAxios(params.id);
    return (
      <div>
        <ProductDetail
          id={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
          image={product.image}
        />
      </div>
    );
  }
  catch (error) {
    return <p>Error al cargar los detalles del producto.</p>;
}
}

export default Product