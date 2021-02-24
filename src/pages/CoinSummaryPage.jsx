import React from "react";
import AddCoin from "../components/AddCoin";
import CoinList from "../components/CoinList";
import Trending from "../components/Trending";
import DayCoin from "../components/DayCoin";
import LastNews from "../components/LastNews";
import SubHeader from "../components/SubHeader";

const CoinSummaryPage = () => {
  return (
    <>
    
    <div className=" d-flex flex-column">
      
    <div className="coinsummary shadow border p-2 rounded mt-2 flex-grow-1">
      
      <CoinList />

      
      </div>
      <Trending />
      <div className="noticias">
        <LastNews />

      </div>
      </div>
      </>
  );
};

export default CoinSummaryPage;
