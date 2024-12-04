import { Link, useNavigate } from "react-router";
import Logo from "../assets/images/logo.svg";
import icon from "../assets/images/icon.svg";
import {useSelector} from "react-redux";
import { ProductType } from "../service/Products";

const Header = () => {
  const  navigate = useNavigate()
  const orderedProducts = useSelector((state:{orderList:ProductType[]})=>state.orderList)

const totalPrice = orderedProducts.reduce((val:number, item:ProductType) => val + item.price * item.orderCount, 0);
  return (
    <div className=" pb-[40px] border-b-[2px] flex items-center justify-between">
      <Link className="flex items-center" to="/">
      <img src={Logo} alt="Site Logo"width={38} height={38} />
      <div className="ml-[17px]">
        <h1 className="text-[22px] leading-[29.23px] font-bold">REACT PIZZA</h1>
        <p className="text-[16px] leading-[19.49px] text-[#7b7b7b]">самая вкусная пицца во вселенной</p>
      </div>
      </Link>
      <button onClick={() => navigate("/basket")} className=" cursor-pointer gap-[13px] flex items-center justify-center w-[150px] py-[12px] bg-[#FE5F1E] rounded-[30px] text-white font-semibold">
        <strong className="text-[16px]">{totalPrice} P</strong>
        <span className="inline-block w-[2px] h-[25px] bg-[#FFFFFF]"></span>
        <div className="flex items-center space-x-[8px]">
        <span > {orderedProducts.length> 0 && orderedProducts.length}</span>
        <img src={icon} alt="Site Logo"width={16} height={16} />
        <span></span>
        </div>
      </button>
    </div>
  );
};

export default Header;
