import React, {useContext, useState} from "react";
import {AppContext} from "../App.jsx";
import Item from "./Item";
import {motion} from "framer-motion";

const CardItem = () => {

    const context = useContext(AppContext);

    const [selectedCategory, setSelectedCategory] = useState('all');

    const onSearch = (inputValue) => {
        context.setSearch(inputValue.target.value);
    }

    const filteredItems = context.card.filter(item => selectedCategory === 'all' || item.country === selectedCategory );

    const handleCategoryChange = (event) => { setSelectedCategory(event.target.value); };

    return (
        <motion.div
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}>
            <div className="container mt-3">
                <h1>Каталог</h1>
                <div className="row">
                    <div className="search-container col-md-3">
                        <input
                            onChange={onSearch}
                            placeholder="Поиск"
                            className="search-input"
                        />
                    </div>
                    <div className="select-container col-md-3">
                        <select onChange={handleCategoryChange} className="category-select">
                            <option value="all">Все</option>
                            <option value="USA">Америка</option>
                            <option value="Germany">Германия</option>
                            <option value="Russia">Россия</option>
                            <option value="China">Китай</option>
                            <option value="Turkey">Турция</option>
                        </select>
                    </div>
                </div>
                <div className="row mt-3">
                    {
                        filteredItems
                            .filter(item => item.name.toLowerCase().includes(context.search.toLowerCase()))
                            .map(obj => {
                                return (
                                    <Item key={obj.id}
                                          id={obj.id}
                                          myId={obj.myId}
                                          name={obj.name}
                                          price={obj.price}
                                          description={obj.description}
                                      url={obj.url}
                                      item={obj}
                                      onPlus={(obj) => context.onAddOverlay(obj)}
                                      onPlusFavorite={(obj) => context.onAddFavorite(obj)}
                                />
                            );
                        })
                }
                </div>
            </div>
        </motion.div>
    );
}

export default CardItem;