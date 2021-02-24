import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const SubHeader = () => {
    
    const [gasInfo, setgasInfo] = useState({})

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async () => {
        const response = await Axios.get("https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=EVRKKRCVUHG8347J49C736VJB5AI918I7Y")
        setgasInfo(response.data.result);
        
    }

    return (
        <div className="subheader bg-white h-100px mb-3">
            <div className="container flex-wrap flex-sm-nowrap">
                <div className="subheader-nav nav flex-grow-1">
                <p href="#" className="nav-item">
									<span className="nav-label px-10">
									<div>   	<span className="nav-title  font-weight-bold font-size-h3 title-eth-gas" >ETH Gas  </span><i className="fas fa-question-circle" data-toggle="tooltip" data-placement="right" title="Costo que tiene el realizar una operación en la red Ethereum"></i></div>
                            <span className="nav-desc text-muted">Safe: { gasInfo.SafeGasPrice} gwei</span>
                            <span className="nav-desc text-muted">Standard: {gasInfo.ProposeGasPrice} gwei </span>
                            <span className="nav-desc text-muted">Fast: {gasInfo.FastGasPrice} gwei </span>
									</span>
                    </p>
                    <a href="#" className="nav-item active">
									<span className="nav-label px-10">
										<span className="nav-title text-dark-75 font-weight-bold font-size-h4">Orders</span>
										<span className="nav-desc text-muted">My Order List</span>
									</span>
								</a>
                </div>
            </div>
            
        </div>
    )
}

export default SubHeader
