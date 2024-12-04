import { ReactNode } from "react";

interface ButtonType {
  orderClass?: string;
  title: string;
  leftIcon?: ReactNode;
  orderCount?: number;
  children?: ReactNode; 
}

const OrderButton: React.FC<ButtonType> = ({
  orderClass,
  title,
  leftIcon,
  orderCount,
  children,
}) => {
  return (
    <button
      className={`${orderClass} group hover:bg-[#EB5A1E] hover:text-white duration-300 w-[150px] py-[10px] flex justify-between items-center gap-[7px] rounded-[30px] border-[2px] border-[#EB5A1E]`}
    >
      {leftIcon}
      <span>{title}</span>
      {orderCount && orderCount > 0 ? (
        <span className="w-[22px] h-[22px] rounded-full group-hover:bg-white group-hover:text-[#EB5A1E] duration-300 flex items-center justify-center text-[12px] font-bold">
          {orderCount}
        </span>
      ) : null}
      {children} 
    </button>
  );
};

export default OrderButton;

