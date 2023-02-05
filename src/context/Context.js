import React, { createContext, useContext, useReducer } from 'react';
import { cartReducer, productReducer } from './Reducers';

const CartContext = createContext();

const Context = ({ children }) => {
    const bikes = [
        {
            id: 1,
            bike_name: 'Yamaha MT 15',
            image: 'https://i.ibb.co/6tYYZQ9/yamaha-mt-15.jpg',
            short_des: '155 cc, 40 kmpl, 130 kmph, 138 kg',
            brand: 'Yamaha',
            price: '395000',
            inStock: 0,
            fastDelivery: true,
            ratings: 3
        },
        {
            id: 2,
            bike_name: 'Aprilia Tuono 660',
            image: 'https://i.ibb.co/FVtdqv2/aprilia-tuono-660.jpg',
            short_des: '660 cc, 183 kg',
            brand: 'Aprilia',
            price: '881900',
            inStock: 4,
            fastDelivery: false,
            ratings: 1
        },
        {
            id: 3,
            bike_name: 'BMW G-310 R',
            image: 'https://i.ibb.co/GPy2QTC/bmw-g-310-r.jpg',
            short_des: '313 cc, 30 kmpl, 145 kmph, 158 kg',
            brand: 'BMW',
            price: '850000',
            inStock: 0,
            fastDelivery: true,
            ratings: 5
        },
        {
            id: 4,
            bike_name: 'Royal Enfield Classic 350',
            image: 'https://i.ibb.co/TgmnrB0/royal-enfield-classic-350.png',
            short_des: '349 cc, 35 kmpl, 195 kg',
            brand: 'Royal Enfield',
            price: '520000',
            inStock: 1,
            fastDelivery: true,
            ratings:4
        },
        {
            id: 5,
            bike_name: 'Kawasaki Z650 RS',
            image: 'https://i.ibb.co/cyVKLtG/kawasaki-z650-rs.jpg',
            short_des: '649 cc, 40 kmpl, 67.30 bhp, 192 kg',
            brand: 'Kawasaki',
            price: '995000',
            inStock: 2,
            fastDelivery:false ,
            ratings:4
        },
        {
            id: 6,
            bike_name: 'TVS Apache RTR 160 4V',
            image: 'https://i.ibb.co/w0qZnKZ/tvs-apache-rtr-160-4v.jpg',
            short_des: '160 cc, 40 kmpl, 130 kmph, 145 kg',
            brand: 'TVS',
            price: '180000',
            inStock: 0,
            fastDelivery: true,
            ratings:3
        },
        {
            id: 7,
            bike_name: 'Bajaj Pulsar 150',
            image: 'https://i.ibb.co/YPg1hWJ/bajaj-pulsar-150.jpg',
            short_des: '150 cc, 45 kmpl, 120 kmph, 144 kg',
            brand: 'Bajaj',
            price: '169000',
            inStock: 3,
            fastDelivery: false,
            ratings:3
        },
        {
            id: 8,
            bike_name: 'Hero Xtreme 200S',
            image: 'https://i.ibb.co/gFFV6sf/hero-xtreme-200s.jpg',
            short_des: '199.6 cc, 35 kmpl, 170 kmph, 154 kg',
            brand: 'Hero',
            price: '250000',
            inStock: 4,
            fastDelivery: true,
            ratings:4
        },
        {
            id: 9,
            bike_name: 'Honda Hornet 2.0',
            image: 'https://i.ibb.co/fQLcCmb/honda-hornet-2-0.jpg',
            short_des: '180 cc, 35 kmpl, 155 kmph, 142 kg',
            brand: 'Honda',
            price: '210000',
            inStock: 5,
            fastDelivery: true,
            ratings:5
        },
        {
            id: 10,
            bike_name: 'Suzuki Gixxer SF 250',
            image: 'https://i.ibb.co/wyzgLcy/suzuki-gixxer-sf-250.jpg',
            short_des: '249 cc, 30 kmpl, 160 kmph, 156 kg',
            brand: 'Suzuki',
            price: '320000',
            inStock: 7,
            fastDelivery: false,
            ratings:5
        },
    ];

    const [state, dispatch] = useReducer(cartReducer, {
        products: bikes,
        cart: []
    });

    const [productState, productDispatch] = useReducer(productReducer, {
        byStock: false,
        byFastDelivery:false,
        byRating: 0,
        searchQuery: "",
    })

    return (
        <CartContext.Provider value={{state, dispatch, productState, productDispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export default Context;

export const CartState = () => {
    return useContext(CartContext);
}