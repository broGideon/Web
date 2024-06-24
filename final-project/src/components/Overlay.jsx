import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AppContext} from "../App.jsx";
import Item from "./Item.jsx";
import {motion} from 'framer-motion';

const Overlay = () => {

    const context = useContext(AppContext);

    return(
        <motion.div
            initial={{opacity: 0, y: 70}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.7}}>
            <div><h1>Корзина</h1></div>

            {context.overlayItems.length > 0 ? (
                <div>
                    {context.overlayItems.map((obj) => (
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

            <div>
                <p>Итог: </p>
                <p>{context.totalPrice}</p>
            </div>
        </motion.div>
    );
}

export default Overlay;