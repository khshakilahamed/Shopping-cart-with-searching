import React from 'react';
import { CartState } from '../../context/Context';
import Filters from '../Filters/Filters';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Home.css';

import './../styles-media-query.css';

const Home = () => {
    const { state: { products },
        productState: { sort, byStock, byFastDelivery, byRating, searchQuery }
    } = CartState();

    const transformProducts = () => {
        let sortedProducts = products;

        if (sort) {
            sortedProducts = sortedProducts.sort((a, b) => 
                sort === "lowToHigh" ? a.price - b.price : b.price - a.price
            );
        }

        if(!byStock){
            sortedProducts = sortedProducts.filter(prod => prod.inStock);
        }
        if(byFastDelivery){
            sortedProducts = sortedProducts.filter(prod => prod.fastDelivery);
        }
        if(byRating){
            sortedProducts = sortedProducts.filter(prod => prod.ratings >= byRating);
        }
        if(searchQuery){
            sortedProducts = sortedProducts.filter(prod => prod.bike_name.toLowerCase().includes(searchQuery.toLowerCase()));
        }

        return sortedProducts;
    }

    // console.log(products);
    return (
        <div className='home'>
            <Filters />
            <div className="productContainer">
                {
                    transformProducts().map(prod => (<SingleProduct key={prod.id} prod={prod}></SingleProduct>))
                }
            </div>
        </div>
    );
};

export default Home;