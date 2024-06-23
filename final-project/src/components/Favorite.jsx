import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AppContext} from "../App.jsx";
import Item from "./Item.jsx";

const Favorite = (props) => {

    const context = useContext(AppContext);

    return(
        <div>
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
        </div>
    );
}

export default Favorite;