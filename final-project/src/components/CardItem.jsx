// eslint-disable-next-line no-unused-vars
import React, {useContext, useState} from "react";
import "./card-item.css";
import {AppContext} from "../App.jsx";
import Item from "./Item";
import {motion} from "framer-motion";

const CardItem = () => {

    const context = useContext(AppContext);

    const [selectedCategory, setSelectedCategory] = useState('all');

    const onSearch = (inputValue) => {
        context.setSearch(inputValue.target.value);
    }

    const filteredItems = context.card.filter(item => selectedCategory === 'all' || item.category === selectedCategory );

    const handleCategoryChange = (event) => { setSelectedCategory(event.target.value); };

    return (
        <motion.div
            initial={{opacity: 0, y: 70}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.7}}>
            <div className="container">

            <div>
                <input onChange={onSearch} placeholder="Поиск"/>
            </div>
            <div>
                <select onChange={handleCategoryChange}>
                    <option value="all">Все</option>
                    <option value="USA">Америка</option>
                    <option value="Germany">Германия</option>
                    <option value="Russia">Россия</option>
                    <option value="China">Китай</option>
                    <option value="Turkey">Турция</option>
                </select>
            </div>
            <div className="row">
            {
                filteredItems
                    .filter(item => item.name.toLowerCase().includes(context.search.toLowerCase()))
                    .map(obj => {
                        return (
                            <div className="col-md-4" key={obj.id}>
                                <Item key={obj.id}
                                      id={obj.id}
                                      myId={obj.myId}
                                      name={obj.name}
                                      price={obj.price}
                                      url={obj.url}
                                      item={obj}
                                      onPlus={(cartObj) => context.onAddOverlay(cartObj)}
                                      onPlusFavorite={(cartObj) => context.onAddFavorite(cartObj)}
                                />
                            </div>
                        );
                    })
            }
            </div>
            </div>
        </motion.div>
    );
}

export default CardItem;