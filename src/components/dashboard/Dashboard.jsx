import TotalProducts from "./TotalProducts";
import { useState, useEffect } from "react";
import AveragePriceProducts from "./AveragePriceProducts";
import TotalOrders from "./TotalOrders";
import MostSelled from "./MostSelled";
import axios from "axios";
import TotalIncome from "./TotalIncome";


const Dashboard = (props) => {
    const [dataProducts, setDataProducts] = useState([]);
    const [dataCart,setDataCart] = useState([]);
    const data = props;

    async function conectAPI(endpoint,setData){
        await axios(`${data.API}/${endpoint}`)
        .then((res) => setData(res.data))
        .catch((err)=> console.error(err))
    }
  useEffect(() => {
    conectAPI('products',setDataProducts)
  }, [])

  useEffect(() => {
    conectAPI('carts',setDataCart)
  }, [])

  return (
    <div className="dashboard">
      <div className="item">
        <TotalIncome data={data} />
      </div>
      <div className="item">
        <TotalProducts dataProducts={dataProducts} />
      </div>
      <div className="item">
        <AveragePriceProducts dataProducts={dataProducts} />
      </div>
      <div className="item">
        <TotalOrders dataCart={dataCart} />
      </div>
      <div className="item-sell">
        <MostSelled dataCart={dataCart} />
      </div>
    </div>
  )
}

export default Dashboard
