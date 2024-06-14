import React from "react";
import "./card-item.css";

import Item from "./Item";
import axios from "axios";

const CardItem = (props) => {
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

    return (
        <div className="card-item">
            {
                props.item.map(obj => {
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