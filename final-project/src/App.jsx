import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import React, { useState, useEffect } from 'react';
import {Route, Routes} from "react-router-dom";
import axios from "axios";
import CardItem from "./components/CardItem.jsx";

const App = () => {
    const [card, setCard] = useState([]);
    const [overlayItems, setOverlayItems] = useState([]);
    const [search, setSearch] = useState([]);

    useEffect(() => {
        async function axiosData() {
            const cardData = await axios.get('http://localhost:3001/card');
            const overlayData = await axios.get('http://localhost:3001/overlays');

            setCard(cardData.data);
            setOverlayItems(cardData.data);
        }

        axiosData();
    }, []);

    return (
        <div>
            <Header/>
            <Routes>
                <Route path={'/cart'} element={<CardItem item={card}/>}/>
                <Route path={'/overlay'} element={<CardItem overlayItems={overlayItems}/>}/>
                <Route path={'/home'} element={<Home/>}/>
            </Routes>
        </div>
    );
}

export default App;
