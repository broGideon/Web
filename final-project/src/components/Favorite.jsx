import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {AiFillHeart} from "react-icons/ai";

const Favorite = (props) => {

    return(
        <div>
            <div><h1>Избраное</h1></div>

            {props.favorite.length > 0 ? (
                <div>
                    {props.favorite.map((obj) => (
                        <Card style={{ width: '28rem' }}>
                            {/*<Card.Img className='rounded' variant="top" src="holder.js/100px180" />*/}
                            <Card.Body>
                                <Card.Title>{obj.name}</Card.Title>
                                <Card.Text>
                                    {obj.description}
                                </Card.Text>
                                <Card.Text>
                                    {obj.price}
                                </Card.Text>
                                <Button onClick={() => props.deleteFavorite(obj.id)} className="mr-2">
                                    {
                                        <AiFillHeart color="red" />
                                    }
                                </Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            ) : (
                <h1>Пусто</h1>
            )}
        </div>
    );
}

export default Favorite;