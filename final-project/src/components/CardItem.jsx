import React from "react";
import "./card-item.css";

import Item from "./Item";

const CardItem = (props) => {
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
                    />
                    );
                })
            }
        </div>
    );
}

export default CardItem;