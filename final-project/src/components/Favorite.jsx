import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AppContext} from "../App.jsx";
import Item from "./Item.jsx";
import {motion} from 'framer-motion';

const Favorite = () => {

    const context = useContext(AppContext);

    return(
        <motion.div
            initial={{opacity: 0, y: 70}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.7}}>
            <div><h1>Избраное</h1></div>

            {context.favorite.length > 0 ? (
                <div>
                    {context.favorite.map((obj) => (
                        <Item
                            key={obj.id}
                            id={obj.id}
                            myId={obj.myId}
                            name={obj.name}
                            description={obj.description}
                            price={obj.price}
                            item={obj}
                            onPlus={(cartObj) => context.onAddOverlay(cartObj)}
                            onPlusFavorite={(cartObj) => context.onAddFavorite(cartObj)}/>
                    ))}
                </div>
            ) : (
                <h1>Пусто</h1>
            )}
        </motion.div>
    );
}

export default Favorite;