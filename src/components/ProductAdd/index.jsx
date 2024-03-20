import React, { useContext, useState } from 'react';
import { BookshopContext } from '../context';
import { FaShoppingCart } from "react-icons/fa";
import { BsBasketFill } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineDelete } from "react-icons/md";


const ProductAdd = ({el}) => {
    const {productsAll, setProductsAll,basket,setBasket} = useContext(BookshopContext)
    const nav = useNavigate()

 const deleteProduct = (data) => {
    let filterProduct = productsAll.filter((el) => el.id !== data.id)
    localStorage.setItem("product",JSON.stringify(filterProduct))
    setProductsAll(filterProduct)
 }
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
    let basIcon = basket.some((some) => some.id === el.id)
    return (
        <div className='productAdd'>
            <Link to={`/details/ ${el.id}`}>
         <img src={el.url} alt="img" />

            </Link>
            <div className="productAdd--price">
                <h3>{el.price} <span>$</span> </h3>
         {
            !basIcon ?  <a onClick={() => addToBasket(el)}><FaShoppingCart /></a> :
            <a  onClick={() => nav("/basket")}><BsBasketFill /></a>
         }
         <button className='text-xl' onClick={() => deleteProduct(el)} >{<MdOutlineDelete/>}</button>
            </div>
            <h2>{el.name} / {el.category}</h2>

        </div>
    );
};

export default ProductAdd;