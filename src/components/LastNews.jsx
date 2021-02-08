import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import New from '../components/New';

const LastNews = () => {

    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        
        
        fetchData()
        
    }, [])

    const fetchData = async () => {
        setIsLoading(true);
        const response = await Axios.get("https://min-api.cryptocompare.com/data/v2/news/?lang=ES&api_key=76078a1b07abf4d50a870169fb522c23c372527b112975146ecd8792cb6f5434");
        console.log(response.data.Data);
        setNews(response.data.Data);
        setIsLoading(false);
    };

    const renderNews = () => {
        if (isLoading) {
            return <div class="d-flex justify-content-center">
                <div class="spinner-border text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>;
        }
    
        return (
            
            <ul className="list-group-horizontal align">
                {news.map((notice, index) => {
                    
                    return <New key={index} notice={notice} /> ;
                })}
            </ul>
        );
    };
    

    return (
        <>
            
            <div className="col-xl-6 col-xxl-4">
                <div className="card card-custom card-stretch gutter-b">
                    <div className="card-header border-0 pt-6">
                        <h3 className="card-title align-items-start">Ultimas Noticias</h3>
                    </div>                        
                    <div className="card-body pt-7">


                            {renderNews()}
                        

                    </div>    


                </div>

            </div>
        </>
    )
}

export default LastNews
