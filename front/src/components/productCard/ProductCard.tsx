import { IProduct } from "@/Interfaces/IProduct";
import styles from "@/components/productCard/ProductCard.module.css";

const ProductCard: React.FC<IProduct> = ({
  // id,
  name,
  description,
  price,
  // stock,
  image,
  // categoryId,
}) => {
  return (
    <div  className={styles.productCardContainer}>
      <div className={styles.productCard}>
        <img className={styles.productImg} src={image} alt={name} width={100} height={200} />
        <div className={styles.dataContainer}>
        <p className={styles.productName}>{name}</p>
        <p className={styles.description}>{description}</p>
        <span className={styles.boldContainer}>Precio: <span className={styles.bold}>{price}</span></span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
