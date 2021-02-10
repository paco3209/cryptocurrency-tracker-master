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
            
            <ul className="list-group-horizontal align">
                {coins.map((coin, index) => {
                    return <li className="list-group-item"> <TrendingCoin key={index} coin={coin.item} /> </li>;
                })}
            </ul>
        );
    };

    return (
        <section className="trending">
            <div style={{ justifyContent: 'center' }}>
                <div className="trending-title">
                        <h2> Tendencias Crypto</h2>
                </div>
                <div className="trending-coins">
                    {renderCoins()}
                </div>
            </div>
        </section>
        
    )
}

export default Trending
