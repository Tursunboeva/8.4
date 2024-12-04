import { ProductType } from "../service/Products";
import { Segmented } from "antd";
import React, { SetStateAction, useState } from "react";
import { useDispatch } from "react-redux";
import { saveOrderProducts } from "../store/orderSlice"
import OrderButton from "./OrderButton";
import Vector from "../assets/images/Vector.svg"

interface ProductCardType {
  item: ProductType;
  getAllProducts: ProductType[];
  setGetAllProducts: React.Dispatch<SetStateAction<ProductType[]>>;
}

const ProductCard: React.FC<ProductCardType> = ({
  item,
  getAllProducts,
  setGetAllProducts,
}) => {
  const dispatch = useDispatch();
  const [type, setType] = useState<string>("тонкое");
  const [size, setSize] = useState<string>(item.size[0]);

  function SegmentedOption(arr: string[]): { label: string; value: string; disabled: boolean }[] {
    const list = [
      { label: "26 cm.", value: "26 cm", disabled: true },
      { label: "30 cm.", value: "30 cm", disabled: true },
      { label: "40 cm.", value: "40 cm", disabled: true },
    ];
    for (let i = 0; i < list.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] === list[i].label) {
          list[i].disabled = false;
        }
      }
    }
    return list;
  }

  function handleOrderBtnClick() {
    const updatedItem = { ...item, orderCount: (item.orderCount || 0) + 1 };
    setGetAllProducts(
      getAllProducts.map((value: ProductType) =>
        value.id === item.id ? updatedItem : value
      )
    );

    dispatch(saveOrderProducts({ ...updatedItem, type: [type], size: [size] }));
  }

  return (
    <div className="w-[280px] flex flex-col items-center">
      <img src={item.imgUrl} alt={item.name} className="w-[260px] h-[260px]" />
      <h2 className="text-[20px] font-bold">{item.name}</h2>
      <Segmented
        options={["тонкое", "традиционное"]}
        onChange={(value) => setType(value as string)}
      />
      <Segmented
        options={SegmentedOption(item.size)}
        onChange={(value) => setSize(value as string)}
      />
      <div onClick={handleOrderBtnClick} className="w-full flex items-center justify-between mt-5">
        <strong className="text-[22px]">от {item.price} P</strong>
        <OrderButton
          title="Добавить"
          orderCount={item.orderCount || 0}
          leftIcon={<img src={Vector} alt="vector icon" />}
          
        />



      </div>
    </div>
  );
};

export default ProductCard;
