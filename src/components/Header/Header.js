import React from 'react';
import { Badge, Button, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import { FaShoppingCart } from "react-icons/fa"
import { Link } from 'react-router-dom';
import { CartState } from '../../context/Context';
import "./Header.css";
import './../styles-media-query.css';

const Header = () => {
    const { state: { cart }, dispatch, productDispatch } = CartState();
    return (
        <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
            <Container>
                <Navbar.Brand>
                    <Link to="/">Shopping Cart</Link>
                </Navbar.Brand>
                <Navbar.Text className='search'>
                    <FormControl
                        style={{ width: 500 }}
                        placeholder="Search here..."
                        className='m-auto'
                        onChange={(e) => {
                            productDispatch({
                                type: "FILTER_BY_SEARCH",
                                payload: e.target.value,
                            })
                        }}
                    />
                </Navbar.Text>
                <Nav>
                    <Dropdown align="end">
                        <Dropdown.Toggle variant="success">
                            <FaShoppingCart color="white" fontSize="25px" />
                            <span style={{ padding: 3 }}>{cart.length}</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item style={{ minWidth: 370 }}>
                                {
                                    cart.length > 0 ? (
                                        <>
                                            {
                                                cart.map(prod => (
                                                    <span className='cartItem' key={prod.id}>
                                                        <img
                                                            src={prod.image}
                                                            className="cartItemImg"
                                                            alt={prod.name}
                                                        />
                                                        <div className='cartItemDetail'>
                                                            <span>{prod.bike_name}</span>
                                                            <span><span style={{ fontSize: 25 }}>৳</span> {prod.price}</span>
                                                        </div>
                                                        <AiFillDelete
                                                            fontSize="20px"
                                                            style={{ cursor: "pointer" }}
                                                            onClick={() => dispatch({
                                                                type: "REMOVE_FROM_CART",
                                                                payload: prod
                                                            })}
                                                        />
                                                    </span>
                                                ))
                                            }
                                            <Link to="/cart">
                                                <Button style={{ width: "95%", margin: "0 10px" }}>
                                                    Go To Cart
                                                </Button>
                                            </Link>
                                        </>
                                    ) : (
                                        <span style={{ padding: 10 }}>Cart is Empty!</span>
                                    )
                                }

                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar >
    );
};

export default Header;