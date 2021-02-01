import React from 'react';
import { Link } from "react-router-dom";


const TrendingCoin = ({coin}) => {
    

    return (
        <div>
            <Link to={`/coins/${coin.id}`} className="text-decoration-none my-1 coin"><p className="text-left">{ coin.name}</p></Link>
            <span class="badge badge-primary badge-pill">{coin.symbol}</span>
        </div>
    )
}

export default TrendingCoin
