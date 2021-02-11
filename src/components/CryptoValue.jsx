import React, { useState, useEffect } from 'react';
import Axios from 'axios';


const CryptoValue = () => {
    const [coinprice, setcoinprice] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        setIsLoading(true);
        const response = await Axios.get("https://criptoya.com/api/btc/ars/0.1");
        console.log(response.data);
        setcoinprice(response.data);
        setIsLoading(false);
    };

    const renderCoins = () => {
        if (isLoading) {
            return <div class="d-flex justify-content-center">
                <div class="spinner-border text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>;
        }
    
        return (
            
            Object.keys(coinprice).map((item, i) => (
                <li className="travelcompany-input" key={i}>
                    <span className="input-label">{item} - { coinprice[item].ask}</span>
                </li>
            ))
        );
    };


    return (
        <div>
            
            {renderCoins()}
        </div>
    )
}

export default CryptoValue
