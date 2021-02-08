import React from "react";
import AddCoin from "../components/AddCoin";
import CoinList from "../components/CoinList";
import Trending from "../components/Trending";
import DayCoin from "../components/DayCoin";

const CoinSummaryPage = () => {
  return (
    <div className=" d-flex flex-column">
      
    <div className="coinsummary shadow border p-2 rounded mt-2 flex-grow-1">
      
      <CoinList />
      
      
      </div>
      <Trending />
      </div>
  );
};

export default CoinSummaryPage;
