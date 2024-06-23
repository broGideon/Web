import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import React, { useState, useEffect } from 'react';
import {Route, Routes} from "react-router-dom";
import axios from "axios";
import CardItem from "./components/CardItem.jsx";
import Overlay from "./components/Overlay.jsx";
import Favorite from "./components/Favorite.jsx";
import About from "./components/About.jsx";

export const AppContext = React.createContext({});

const App = () => {
    const [card, setCard] = useState([]);
    const [overlayItems, setOverlayItems] = useState([]);
    const [search, setSearch] = useState("");
    const [favorite, setFavorite] = useState([]);
    const [about, setAbout] = useState();

    useEffect(() => {
        async function axiosData() {
            const cardData = await axios.get('http://localhost:3001/card');
            const overlayData = await axios.get('http://localhost:3001/overlays');
            const favoriteData = await axios.get('http://localhost:3001/favorite');

            setCard(cardData.data);
            setOverlayItems(overlayData.data);
            setFavorite(favoriteData.data)
        }

        axiosData();
    }, []);

    const isAdded = (myId) => {
        return overlayItems.some((objIsAdded) => objIsAdded.myId === myId);
    }

    const isAddedToFavorite = (myId) => {
        return favorite.some((objIsAddedToFavorite) => objIsAddedToFavorite.myId === myId);
    }

    const deleteItem = (id) => {
        axios.delete(`http://localhost:3001/overlays/${id}`);
        setOverlayItems(()=> overlayItems.filter(item => Number(item.id) !== Number(id)));
    }

    const deleteFavorite = (id) => {
        axios.delete(`http://localhost:3001/favorite/${id}`);
        setFavorite(()=> favorite.filter(item => Number(item.id) !== Number(id)));
    }

    const onAddFavorite = (obj) => {
        try{
            if(favorite.find(item => Number(item.id) === Number(obj.id))){
                axios.delete(`http://localhost:3001/favorite/${obj.id}`);
                setFavorite((over) => over.filter(item => Number(item.id) !== Number(obj.id)));
            } else {
                axios.post(`http://localhost:3001/favorite`, obj);
                setFavorite([...favorite, obj]);
            }
        }
        catch{
            alert("Error");
        }
    }

    const onAddOverlay = (obj) => {
        try{
            if(overlayItems.find(item => Number(item.id) === Number(obj.id))){
                axios.delete(`http://localhost:3001/overlays/${obj.id}`);
                setOverlayItems((over) => over.filter(item => Number(item.id) !== Number(obj.id)));
            } else {
                axios.post(`http://localhost:3001/overlays`, obj);
                setOverlayItems([...overlayItems, obj]);
            }
        }
        catch{
            alert("Error");
        }
    }

    const totalPrice = overlayItems.reduce((total, obj) => total + parseFloat(obj.price), 0);


    return (
        <AppContext.Provider
            value={{
                card,
                setCard,
                overlayItems,
                setOverlayItems,
                search,
                setSearch,
                favorite,
                setFavorite,
                totalPrice,
                about,
                setAbout,
                isAdded,
                deleteItem,
                isAddedToFavorite,
                deleteFavorite,
                onAddFavorite,
                onAddOverlay
            }}>
            <div>
                <Header/>
                <Routes>
                    <Route path={'/cart'} element={ <CardItem/>} />
                    <Route path={'/overlay'} element={ <Overlay/>} />
                    <Route path={'/favorite'} element={ <Favorite/>} />
                    <Route path={'/'} element={<Home/>} />
                    <Route path={'/about'} element={<About/>} />
                </Routes>
            </div>
        </AppContext.Provider>
    );
}

export default App;
