


//TODO Aqui se debe renderizar el una card con el producto dependiendo del id


import React from 'react'

const Detail: React.FC<{params: {productId: string}}> = ({params}) => {
    console.log(params.productId);
    
  return (

    // <ProductDetail/> //! Esta es la vista del detalle del producto. Se accede a ella clicando sobre el  producto en la vista de productos.   


    <div>Aqui se muestra el detalle del producto {params.productId}</div>
  )
}

export default Detail