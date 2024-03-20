import React from 'react';
import  { useContext } from 'react';
import { BookshopContext } from '../context';
import { useNavigate ,Link} from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { BsBasketFill } from "react-icons/bs";

const CategoryProductBooks = ({el}) => {
    const {productsAll,basket,setBasket} = useContext (BookshopContext)
    let nav =useNavigate()

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
        <div className=''>
                  <div className='productAdd '>
        <Link to={`/details/ ${el.id}`}>
     <img src={el.url} alt="img" />

        </Link>
        <div className="productAdd--price">
            <h3>{el.price} <span>$</span> </h3>
     {
        !basIcon ?  <a onClick={() => addToBasket(el)}><FaShoppingCart /></a> :
        <a  onClick={() => nav("/basket")}><BsBasketFill /></a>
     }
        </div>
        <h2>{el.name} / {el.category}</h2>
    </div> 
        </div>
    );
};

export default CategoryProductBooks;