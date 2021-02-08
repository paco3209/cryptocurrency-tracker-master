import React,{useState,useEffect} from 'react';
import Axios from 'axios';

const DayCoin = () => {
    const [coinDay, setcoinDay] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            const response = await Axios.get("https://api.lunarcrush.com/v2?data=assets&key=i6u10lutpaqncx4irfzxq&symbol=LTC");
            
            console.log(response.data);
            setcoinDay(response.data)
        }
        fetchData();
    }, [coinDay])

    return (
        <div>
            
            prueba
        </div>
    )
}

export default DayCoin
