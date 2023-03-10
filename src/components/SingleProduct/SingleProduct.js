import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { CartState } from '../../context/Context';
import Rating from '../Rating/Rating';
import './SingleProduct.css';
import './../styles-media-query.css';

const SingleProduct = ({ prod }) => {
    const { state: { cart }, dispatch } = CartState();

    // console.log(cart);
    return (
        <div className='products'>
            <Card>
                <Card.Img variant="top" src={prod.image} />
                <Card.Body>
                    <Card.Title>{prod.bike_name}</Card.Title>
                    <Card.Subtitle style={{ paddingBottom: 10 }}>
                        <span><span style={{ fontSize: 25 }}>৳</span> {prod.price}</span>
                        {
                            prod.fastDelivery ? (
                                <div>Fast Delivery</div>
                            ) : (
                                <div>4 days delivery</div>
                            )
                        }
                        <Rating rating={prod.ratings} />
                    </Card.Subtitle>
                    {
                        cart.some(p => p.id === prod.id) ? (
                            <Button
                                onClick={() => {
                                    dispatch({
                                        type: "REMOVE_FROM_CART",
                                        payload: prod
                                    })
                                }}
                                variant="danger">Remove from cart</Button>
                        ) : (
                            <Button onClick={() => {
                                dispatch({
                                    type: "ADD_TO_CART",
                                    payload: prod
                                })
                            }}
                                disabled={!prod.inStock}>
                                {!prod.inStock ? "Out of Stock" : "Add to cart"}
                            </Button>
                        )
                    }
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleProduct;