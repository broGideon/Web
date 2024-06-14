import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import React, { useState, useEffect } from 'react';
import {Route, Routes} from "react-router-dom";
import axios from "axios";
import CardItem from "./components/CardItem.jsx";
import Overlay from "./components/Overlay.jsx";

export const AppContext = React.createContext({});

const App = () => {
    const [card, setCard] = useState([]);
    const [overlayItems, setOverlayItems] = useState([]);
    const [search, setSearch] = useState([]);

    useEffect(() => {
        async function axiosData() {
            const cardData = await axios.get('http://localhost:3001/card');
            const overlayData = await axios.get('http://localhost:3001/overlays');

            setCard(cardData.data);
            setOverlayItems(overlayData.data);
        }

        axiosData();
    }, []);

    const isAdded = (myId) => {
        return overlayItems.some((objIsAdded) => objIsAdded.myId === myId);
    }

    const deleteItem = (id) => {
        axios.delete(`http://localhost:3001/overlays/${id}`);
        setOverlayItems(()=> overlayItems.filter(item => Number(item.id) !== Number(id)));
    }

    const totalPrice = overlayItems.reduce((total, obj) => total + parseFloat(obj.price), 0);


    return (
        <AppContext.Provider
            value={{
                card,
                setCard,
                overlayItems,
                setOverlayItems,
                isAdded,
                deleteItem
            }}>
            <div>
                <Header/>
                <Routes>
                    <Route path={'/cart'} element={
                        <CardItem
                            item={card}
                            overlayItems={overlayItems}
                            setOverlayItems={setOverlayItems}
                        />}/>
                    <Route path={'/overlay'} element={
                        <Overlay
                            overlayItems={overlayItems}
                            deleteItem={deleteItem}
                            totalPrice={totalPrice}
                        />}/>
                    <Route path={'/'} element={<Home/>}/>
                </Routes>
            </div>
        </AppContext.Provider>
    );
}

export default App;
