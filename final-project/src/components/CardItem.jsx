// eslint-disable-next-line no-unused-vars
import React, {useContext, useState} from "react";
import "./card-item.css";
import {AppContext} from "../App.jsx";
import Item from "./Item";
import axios from "axios";

const CardItem = (props) => {

    const context = useContext(AppContext);

    const [selectedCategory, setSelectedCategory] = useState('all');

    const onSearch = (inputValue) => {
        context.setSearch(inputValue.target.value);
    }

    const filteredItems = context.card.filter(item => selectedCategory === 'all' || item.category === selectedCategory );

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
                    .filter(item => item.name.toLowerCase().includes(context.search.toLowerCase()))
                    .map(obj => {
                        return (
                            <Item key={obj.id}
                                  id={obj.id}
                                  myId={obj.myId}
                                  name={obj.name}
                                  description={obj.description}
                                  price={obj.price}
                                  item={obj}
                                  onPlus={(cartObj) => context.onAddOverlay(cartObj)}
                                  onPlusFavorite={(cartObj) => context.onAddFavorite(cartObj)}
                            />
                        );
                    })
            }
        </div>
    );
}

export default CardItem;