import React from 'react'

const Detail: React.FC<{params: {productId: string}}> = ({params}) => {
    console.log(params.productId);
    
  return (
    <div>Aqui se muestra el detalle del producto {params.productId}</div>
  )
}

export default Detail