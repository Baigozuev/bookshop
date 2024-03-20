
import React, { useContext, useState } from 'react';
import { BookshopContext } from '../context';
import { FaShoppingCart } from "react-icons/fa";
import { BsBasketFill } from "react-icons/bs";
import { Link, useNavigate, useParams } from 'react-router-dom';


const Search = () => {
    const {nameSearch} = useParams()
    const {productsAll,basket,setBasket} = useContext(BookshopContext)
    const nav = useNavigate()
     let {id,category,url,price,name,el} = findSearch
    let findSearch = productsAll.find((el) => el.name === nameSearch)

    const addToBasket = (product) => {
        let finBas = basket.find((el) => el.id === product.id)
        if(finBas) {

            let changeBas = basket.map((el) => el.id ===product.id ? {...el,quantity : el.quantity + 1}: el)
            localStorage.setItem("basket",JSON.stringify(changeBas))
            setBasket(changeBas)
        }else {

            let result = [...basket,product]
            setBasket(result)
            localStorage.setItem("basket",JSON.stringify(result))
        }

    }
    let basIcon = basket.some((some) => some.id === findSearch.id)
    return (
        <div>
             <div className='productAdd'>
            <Link to={`/details/ ${id}`}>
         <img src={url} alt="img" />

            </Link>
            <div className="productAdd--price">
                <h3>{price} <span>$</span> </h3>
         {
            !basIcon ?  <a onClick={() => addToBasket(el)}><FaShoppingCart /></a> :
            <a  onClick={() => nav("/basket")}><BsBasketFill /></a>
         }
            </div>
            <h2>{name} / {category}</h2>
        </div>
        </div>
    );
};

export default Search;