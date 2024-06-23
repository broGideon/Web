import React, {useContext, useState} from "react";
import {AppContext} from "../App.jsx";
import Item from "./Item.jsx";

const About = () => {

    const context = useContext(AppContext);

    const obj = context.about;
    console.log(context.about);
    return (
        <>
            <h1>О товаре</h1>
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
        </>
    )
}

export default About;