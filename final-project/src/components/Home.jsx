import CardItem from './CardItem';

import { useState, useEffect } from 'react';
import axios from "axios";

function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function axiosData() {
            const cardData = await axios.get('http://localhost:3001/card');

            setData(cardData.data);
        }

        axiosData();
    }, []);
    return (
        <div >
            <CardItem item={data}/>
        </div>
    );
}

export default Home;
