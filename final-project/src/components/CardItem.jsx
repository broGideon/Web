// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import "./card-item.css";

import Item from "./Item";
import axios from "axios";

const CardItem = (props) => {

    const [selectedCategory, setSelectedCategory] = useState('all');

    const onAddOverlay = (obj) => {
        try{
            if(props.overlayItems.find(item => Number(item.id) === Number(obj.id))){
                axios.delete(`http://localhost:3001/overlays/${obj.id}`);
                props.setOverlayItems((over) => over.filter(item => Number(item.id) !== Number(obj.id)));
            } else {
                axios.post(`http://localhost:3001/overlays`, obj);
                props.setOverlayItems([...props.overlayItems, obj]);
            }
        }
        catch{
            alert("Error");
        }
    }

    const onAddFavorite = (obj) => {
        try{
            if(props.favorite.find(item => Number(item.id) === Number(obj.id))){
                axios.delete(`http://localhost:3001/favorite/${obj.id}`);
                props.setFavorite((over) => over.filter(item => Number(item.id) !== Number(obj.id)));
            } else {
                axios.post(`http://localhost:3001/favorite`, obj);
                props.setFavorite([...props.favorite, obj]);
            }
        }
        catch{
            alert("Error");
        }
    }

    const onSearch = (inputValue) => {
        props.setSearch(inputValue.target.value);
    }

    const filteredItems = props.item.filter(item => selectedCategory === 'all' || item.category === selectedCategory );

    const handleCategoryChange = (event) => { setSelectedCategory(event.target.value); };

    return (
        <div>
            <div>
                <input onChange={onSearch} placeholder="Поиск"/>
            </div>
            <div>
                <select onChange={handleCategoryChange}>
                    <option value="all">Все</option>
                    <option value="fruit">Фрукты</option>
                    <option value="notFruit">Не фрукты</option>
                    <option value="category3">Категория 3</option>
                </select>
            </div>
            {
                filteredItems
                    .filter(
                        item => item.name.toLowerCase().includes(props.search.toLowerCase())
                    )
                    .map(obj => {
                        return (
                            <Item key={obj.id}
                                  id={obj.id}
                                  myId={obj.myId}
                                  name={obj.name}
                                  description={obj.description}
                                  price={obj.price}

                                  onPlus={(cartObj) => onAddOverlay(cartObj)}
                                  onPlusFavorite={(cartObj) => onAddFavorite(cartObj)}
                            />
                        );
                    })
            }
        </div>
    );
}

export default CardItem;