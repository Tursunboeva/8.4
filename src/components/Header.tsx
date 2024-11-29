import { Link } from "react-router";
import Logo from "../assets/images/logo.svg";
import icon from "../assets/images/icon.svg";

interface HeaderType{
    basketCount: number,
    totalPrice: number
}
const Header:React.FC<HeaderType> = ({basketCount, totalPrice}) => {
  return (
    <div className=" pb-[40px] border-b-[2px] flex items-center justify-between">
      <Link className="flex items-center" to="/">
      <img src={Logo} alt="Site Logo"width={38} height={38} />
      <div className="ml-[17px]">
        <h1 className="text-[22px] leading-[29.23px] font-bold">REACT PIZZA</h1>
        <p className="text-[16px] leading-[19.49px] text-[#7b7b7b]">самая вкусная пицца во вселенной</p>
      </div>
      </Link>
      <button className=" cursor-pointer gap-[13px] flex items-center justify-center w-[150px] py-[12px] bg-[#FE5F1E] rounded-[30px] text-white font-semibold">
        <strong className="text-[16px]">{totalPrice} P</strong>
        <div className="flex items-center space-x-[8px]">
        <span className="inline-block w-[2px] h-[25px] bg-[#FFFFFF]  "></span>
        <img src={icon} alt="Site Logo"width={16} height={16} />
        <span>{basketCount}</span>
        </div>
      </button>
    </div>
  );
};

export default Header;
