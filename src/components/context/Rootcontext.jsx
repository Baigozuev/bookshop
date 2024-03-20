import React, {  useEffect, useState } from 'react';
import { BookshopContext } from '.';

const Rootcontext = ({children}) => {
  
  const [modal , setModal] = useState (false)
const [admin,setAdmin] = useState(false)
const [productsAll,setProductsAll] = useState ([])
const [basket,setBasket] = useState([])

  const readProduct = () => {
    let res = JSON.parse(localStorage.getItem("product")) || []
    let bas = JSON.parse(localStorage.getItem("basket")) ||[]
    setProductsAll(res)
    setBasket(bas)
  }
  useEffect(() => {
    readProduct()
  },[])
    return (
        <BookshopContext.Provider value={{
          basket,
           productsAll,
            modal,
            admin,
            setBasket,
            setModal,
            setAdmin,
            setProductsAll,
        }} >
            {children}
        </BookshopContext.Provider >
        
    );
};

export default Rootcontext;