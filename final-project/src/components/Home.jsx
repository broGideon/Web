import {useState, useEffect, useContext} from 'react';
import {AppContext} from "../App.jsx";
import Item from "./Item.jsx";
import {motion} from "framer-motion";


const Home = () => {
    const context = useContext(AppContext);
    const items = context.card.slice(0, 10);
    console.log(items);
    return(
        <motion.div
            initial={{opacity: 0, y: 70}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.7}}>
                {items.map((obj) => {
                return(
                    <Item
                        key={obj.id}
                        id={obj.id}
                        myId={obj.myId}
                        name={obj.name}
                        description={obj.description}
                        price={obj.price}
                        url={obj.url}
                        item={obj}
                        onPlus={(cartObj) => context.onAddOverlay(cartObj)}
                        onPlusFavorite={(cartObj) => context.onAddFavorite(cartObj)}
                        />
            )
        })}
    </motion.div>
    )

}

export default Home;
