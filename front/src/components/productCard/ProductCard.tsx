import { IProduct } from "@/Interfaces/IProduct";
// import styles from "@/components/productCard/ProductCard.module.css";

const ProductCard: React.FC<IProduct> = ({ name, price, image }) => {
  return (
    <div className="w-[450px] h-[380px] flex flex-row items-center justify-center gap-4 m-8 p-4 border rounded-xl">
        <img 
        className="max-w-[250px] w-full h-auto" 
        src={image} 
        alt={name}/>
        <div className="flex flex-col items-center justify-center">
          <p className="text-lg font-semibold">{name}</p>
          <span className="">
            {`$ ${price}`}
          </span>
        </div>
      </div>
  );
};

export default ProductCard;
