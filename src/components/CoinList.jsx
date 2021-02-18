import React, { useEffect, useState, useContext } from "react";
import coinGecko from "../apis/coinGecko";
import { WatchListContext } from "../context/watchListContext";
import Coin from "./Coin";

const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const { watchList, deleteCoin } = useContext(WatchListContext);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await coinGecko.get("/coins/markets/", {
        params: {
          vs_currency: "usd",
          per_page: 20,
          price_change_percentage: '1h,7d,30d'
          
        },
      });
      console.log(response.data);
      setCoins(response.data);
      setIsLoading(false);
    };

    if (watchList.length > 0) {
      fetchData();
    } else setCoins([]);
  }, [watchList]);

  const renderCoins = () => {
    if (isLoading) {
      return <div class="d-flex justify-content-center">
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>;
    }

    return (
      <div className="table-responsive-xl">
      <table class="table table-hover sortable">
  <thead>
    <tr>
      <th scope="col" className="col-auto">#</th>
      <th scope="col" className="col-md-auto">Ticker</th>
      <th scope="col" className="col-md-auto">Nombre</th>
              <th scope="col" className="col-md-auto">Ultimo Precio</th>
              <th scope="col" className="col-md-auto">Variación 1 h</th>
              <th scope="col" className="col-md-auto">Variación 24 hs</th>
              <th scope="col" className="col-md-auto">Variación 7 d</th>
              <th scope="col" className="col-md-auto">Variación 30 d</th>
    </tr>
        </thead>
        <tbody>
        {coins.slice(0,15).map((coin) => {
          return <Coin key={coin.id} coin={coin} deleteCoin={deleteCoin} />;
        })}
            
          </tbody>
          
        </table>
        </div>
    );
  };

  return <div>{renderCoins()}</div>;
};

export default CoinList;
