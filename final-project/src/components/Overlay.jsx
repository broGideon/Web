import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Overlay = (props) => {
    return(
        <div>
            <div><h1>Корзина</h1></div>

            {props.overlayItems.length > 0 ? (
                <div>
                    {props.overlayItems.map((obj) => (
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
                                <Button variant="danger" onClick={() => props.deleteItem(obj.id)}>
                                    X
                                </Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
                ) : (
                    <h1>Пусто</h1>
            )}

            <div>
                <p>Итог: </p>
                <p>{props.totalPrice}</p>
            </div>
        </div>
    );
}

export default Overlay;