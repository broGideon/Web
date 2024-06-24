import React, {useContext, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AppContext} from "../App";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {useLocation, useNavigate} from "react-router-dom";

const Item = (props) => {
    const context = React.useContext(AppContext);
    const navigate = useNavigate();
    const location = useLocation();

    console.log(location.pathname);

    const onClickAdd = () => {
        const {id, myId, name: name, description: description, price: price} = props;
        props.onPlus({id, myId, name, description, price});
    }

    const onClickAddToFavorite = () => {
        const {id, myId, name:name, description:description, price:price} = props;
        props.onPlusFavorite({id, myId, name, description, price});
    }

    const onRedirectAbout = () => {
        context.setAbout(props.item);
        console.log("О товаре");
        return (
            navigate('/about')
        )
    }
    return (
        <Card style={{ width: '28rem' }}>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.price} руб
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
                <Button onClick={onClickAddToFavorite} variant="outline-primary" className="mr-2">
                    {
                        context.isAddedToFavorite(props.myId) ? <AiFillHeart size="1.5em"/> : <AiOutlineHeart size="1.5em"/>
                    }
                </Button>
                {
                    location.pathname !== '/about' ? (
                        <Button variant="link" onClick={onRedirectAbout}>О товаре</Button>
                    ) : <></>
                }
            </Card.Body>
        </Card>
    );
}

export default Item;