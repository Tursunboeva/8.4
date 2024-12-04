import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
  const { categoryId } = useContext(Context);
  const orderedList = useSelector(
    (state: { orderList: ProductType[] }) => state.orderList
  );

  const { data: products = [], isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: () => useAxios().get("/products").then((res) => res.data),
    enabled: true,
  });

  const [getAllProducts, setGetAllProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    if (products.length > 0) {
      setGetAllProducts(products);
    }
  }, [products]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong!</div>;
  }

  return (
    <div className="mt-[95px] flex justify-between flex-wrap">
      {getAllProducts.map((item: ProductType) => (
        <ProductCard
          getAllProducts={getAllProducts}
          setGetAllProducts={setGetAllProducts}
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
};

export default Products;
