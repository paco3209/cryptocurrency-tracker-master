import React from "react";
import { Link } from "react-router-dom";
import NumberFormat from 'react-number-format';

const Coin = ({ coin, deleteCoin }) => {
  return (
    
      
      
      
     
      <tr>
        <td scope="col"><img className="coinlist-image" src={coin.image} alt="" /></td>
        <td scope="col"><p>{ coin.symbol}</p></td>
        <td scope="col"><Link to={`/coins/${coin.id}`} className="text-decoration-none my-1 coin"><p className="text-left">{ coin.name}</p></Link></td>
        <td scope="col"><span className="text-decoration-none"><NumberFormat value={coin.current_price} displayType={'text'} thousandSeparator={true} prefix={'$ '} /></span></td>
      <td scope="col">
        <span
          className={
            coin.price_change_percentage_24h < 0
              ? "text-danger mr-2"
              : "text-success mr-2"
          }
        >
          {" "}
          {coin.price_change_percentage_24h < 0 ? (
            <i className="fas fa-sort-down align-middle mr-1"></i>
          ) : (
            <i className="fas fa-sort-up align-middle mr-1"></i>
          )}
          {coin.price_change_percentage_24h} %
            </span>
            </td>
        </tr>
          
          
        
        
      
  );
};

export default Coin;
