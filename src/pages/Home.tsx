
import  Header  from "../components/Header"
import Categories from "../service/Categories"
import Products from "../service/Products"
const Home = () => {
  return (
    <div className="bg-white rounded-[10px] pt-[49px] px-[52px] pb-[96px]">
      <Header totalPrice={520} basketCount={3}/>
      <div>
        <Categories/>
        <Products/>
      </div>
    </div>
  )
}

export default Home