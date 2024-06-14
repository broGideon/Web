import React from "react";
import "./card-item.css";

import Item from "./Item";
import axios from "axios";
import overlay from "./Overlay.jsx";
import {json} from "react-router-dom";

const CardItem = (props) => {
    const onAddOverlay = (obj) => {
        try{
            if(props.overlayItems.find(item => Number(item.id) === Number(obj.id))){
                axios.delete(`http://localhost:3001/card/${obj.id}`);
                props.setOverlayItems((over) => over.filter(item => Number(item.id) !== Number(obj.id)));
            } else {
                axios.post(`http://localhost:3001/card`, obj);
                props.setOverlayItems([...props.overlayItems, obj]);
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
                          name={obj.name}
                          description={obj.description}
                          price={obj.price}

                          onPlus={(cartObj) => onAddOverlay(cartObj)}
                    />
                    );
                })
            }
        </div>
    );
}

export default CardItem;