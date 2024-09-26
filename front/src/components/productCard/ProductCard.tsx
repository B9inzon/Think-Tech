import { IProduct } from "@/Interfaces/IProduct";

const ProductCard: React.FC<IProduct> = ({ name, price, image }) => {
  return (
      <div className="w-[450px] h-[380px] flex flex-row items-center justify-center gap-4 m-8 p-4 border rounded-xl hover:cursor-pointer shadow-lg bg-[#fefefe] ">
        <img className="max-w-[250px] w-full h-auto" src={image} alt={name} />
        <div className="flex flex-col items-center justify-center">
          <p className="text-lg font-semibold">{name}</p>
          <span className="">{`$ ${price}`}</span>
        </div>
      </div>
  );
};

export default ProductCard;
