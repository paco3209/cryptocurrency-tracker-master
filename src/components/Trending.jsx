import React, { useEffect, useState, useContext } from "react";
import coinGecko from "../apis/coinGecko";
import TrendingCoin from "../components/TrendingCoin";
import { WatchListContext } from "../context/watchListContext";
const Trending = () => {
    const [coins, setCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { watchList, deleteCoin } = useContext(WatchListContext);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const response = await coinGecko.get("/search/trending");
            console.log(response.data.coins);
            setCoins(response.data.coins);
            setIsLoading(false);
        };
        
        fetchData()
        
    }, []);
    
    const renderCoins = () => {
        if (isLoading) {
            return <div class="d-flex justify-content-center">
                <div class="spinner-border text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>;
        }
    
        return (
            
            <ul className="coinlist list-group  mt-2">
                {coins.map((coin, index) => {
                    return <li className="list-group-item d-flex justify-content-between align-items-center"> <TrendingCoin key={index} coin={coin.item} /> </li>;
                })}
            </ul>
        );
    };

    return (
        <div >
            <h4>Tendencia</h4>
            {renderCoins()}
        </div>
        
    )
}

export default Trending
