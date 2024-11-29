import {useContext} from "react";
import { useAxios } from "../hook/useAxios";
import ProductCard from "../components/ProductCard";
import { Context } from "../context/Context";
import { useQuery } from "@tanstack/react-query";

export interface ProductType {
  id: string;
  categoryId: string;
  name: string;
  imgUrl: string;
  type: string[];
  size: string[];
  price: number;
  orderCount: number;

}

const Products = () => {
  const{categoryId}=useContext(Context);
  const { data: products =[]} = useQuery({
    queryKey: ["products", categoryId],
    queryFn: () => useAxios().get("/products").then((res) => res.data),
  });


  return (
    <div className="mt-[95px] flex justify-between flex-wrap">
      {products.map((item: ProductType) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  )
}

export default Products