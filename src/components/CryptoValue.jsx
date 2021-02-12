import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import NumberFormat from 'react-number-format';


const CryptoValue = ({data}) => {
    const [coinprice, setcoinprice] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const {  detail } = data;
    

    useEffect(() => {
        if(detail){
        fetchData();
    }
        
    }, [])

    const fetchData = async () => {
        setIsLoading(true);
        const response = await Axios.get(`https://criptoya.com/api/${detail.symbol}/ars/0.1`);
        
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
        if (coinprice == "Invalid exchange") {
            return (
                <tr>
                    <th>No existen Exchanges en Argentina que operen con esta moneda</th>
                    <td>-</td>
                    <td>-</td>
                </tr>
                
                
            )
        } else {
            return (
            
            

                Object.keys(coinprice).map((item, i) => (
             
    
                    <tr  key={i}>
                        <th scope>{i + 1}</th>
                        <td>{item}</td>
                        <td><NumberFormat value={ coinprice[item].ask} displayType={'text'} thousandSeparator={true} fixedDecimalScale="true" suffix={' ARS'} decimalScale='2' />  </td>
                    </tr>
                ))
            );
        }
    
        
    };


    return (
        <>
    <div className="value-argexchange-container">
        <div className="value-argexchange-title">
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
                </div>
            </>
    )
}

export default CryptoValue
