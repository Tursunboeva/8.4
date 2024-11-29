import  {ProductType } from "../service/Products";
import { Segmented } from "antd";

const ProductCard: React.FC<{ item: ProductType }> = ({ item }) => {
  return (
    <div className="w-[280px] flex flex-col items-center">
      <img src={item.imgURL} alt={item.name} className="w-[260px] h-[260px]" />
      <h2 className="text-[20px] font-bold">{item.name}</h2>
      <Segmented options={["тонкое", "традиционное"]} />
      <Segmented options={["26сm", "30сm", "40сm"]} />
      <strong className="text-[22px]">от {item.price} P</strong>
    </div>
  );
};

export default ProductCard;
