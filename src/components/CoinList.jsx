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
          per_page:20
          
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
      <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Simbolo</th>
      <th scope="col">Nombre</th>
      <th scope="col">Ultimo Precio</th>
      <th scope="col">Variación 24 hs</th>
    </tr>
        </thead>
        <tbody>
        {coins.slice(0,10).map((coin) => {
          return <Coin key={coin.id} coin={coin} deleteCoin={deleteCoin} />;
        })}
          </tbody>
      </table>
    );
  };

  return <div>{renderCoins()}</div>;
};

export default CoinList;
