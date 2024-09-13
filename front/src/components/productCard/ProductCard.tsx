import { IProduct } from "@/Interfaces/IProduct";
import Image from "next/image";
import styles from "@/components/productCard/ProductCard.module.css";

const ProductCard: React.FC<IProduct> = ({
  id,
  name,
  description,
  price,
  stock,
  image,
  categoryId,
}) => {
  return (
    <div  className={styles.productCardContainer}>
      <div className={styles.productCard}>
        {/* <span>ID: {id}</span> */}
        <img src={image} alt={name} width={100} height={200} />
        <div>
        <span>Nombre: {name}</span>
        <p className={styles.description}>Descripción: {description}</p>
        <span>Precio: {price}</span>
        {/* <span>Stock: {stock}</span> */}
        {/* <span>Category: {categoryId}</span> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
