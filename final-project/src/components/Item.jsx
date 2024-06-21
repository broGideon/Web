import React, {useContext, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AppContext} from "../App";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";

const Item = (props) => {
    const context = React.useContext(AppContext);

    const onClickAdd = () => {
        // eslint-disable-next-line react/prop-types
        const {id, myId, name: name, description: description, price: price} = props;
        props.onPlus({id, myId, name, description, price});
    }

    const onClickAddToFavorite = () => {
        // eslint-disable-next-line react/prop-types
        const {id, myId, name:name, description:description, price:price} = props;
        props.onPlusFavorite({id, myId, name, description, price});
    }
    return (
        <Card style={{ width: '28rem' }}>
            {/*<Card.Img className='rounded' variant="top" src="holder.js/100px180" />*/}
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <Card.Text>
                    {props.price}
                </Card.Text>
                {
                    context.isAdded(props.myId) ? (
                        <Button variant="danger" onClick={onClickAdd}>
                            Удалить
                        </Button>):(
                        <Button onClick={onClickAdd}>
                            Добавить
                        </Button>
                    )
                }
                {<Button onClick={onClickAddToFavorite} className="mr-2">
                    {
                        context.isAddedToFavorite(props.myId) ? <AiFillHeart color="red" /> : <AiOutlineHeart color="gray" />
                    }
                </Button>}
            </Card.Body>
        </Card>
    );
}

export default Item;