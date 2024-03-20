import React, { useContext } from 'react';
import { BookshopContext } from '../context';
import {  useParams } from 'react-router-dom';
import CategoryProductBooks from '../CategoryProductBooks';

const CategoryProduct = () => {
    const {productsAll,basket,setBasket} = useContext (BookshopContext)
    const {categoryBook} = useParams()
    let filterCategory = productsAll.filter((el) => el.category === categoryBook)
    console.log(filterCategory);



    return (
        <div className='container'>
            <div className=''>
            <div className="w-[100%] mt-10 ">
            {
                    filterCategory.map((el) => <CategoryProductBooks el={el}/> )
                }
            </div>
            </div>
        </div>
    );
};

export default CategoryProduct;