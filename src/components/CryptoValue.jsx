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
         

                <tr  key={i}>
                    <th scope>{i + 1}</th>
                    <td>{item}</td>
                    <td> $ { coinprice[item].ask}</td>
                </tr>
            ))
        );
    };


    return (
        <>
        <div>
            <h4>Cotizacion Exchanges Argentinos</h4>
        </div>
        <div>
            <table class="table table-sm">
  <thead>
    <tr className="bg-primary text-white">
    <th scope="col">#</th>  
      <th scope="col">Exchange</th>
      <th scope="col">Cotizacion</th>
      
    </tr>
  </thead>
  <tbody>
  {renderCoins()}
  </tbody>
</table>
            
           
            </div>
            </>
    )
}

export default CryptoValue
