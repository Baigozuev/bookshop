import React, { useContext, useEffect, useState } from 'react';
import Slider from "react-slick";
import herobg from "../../img/image 112.png"
import { BookshopContext } from '../context';
import ProductAdd from '../ProductAdd';
import Category from '../Category';

const Hero = () => {
  const [value,setValue] = useState("")
  const {productsAll,setProductsAll} = useContext(BookshopContext)
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      let all = productsAll
      const selectChange = () => {
        if (value === "cheap") {
          let res = all.sort((a, b) => a.price - b.price)
          setProductsAll(res)
        } else if (value === "expensiv") {
          let res = all.sort((a, b) => b.price - a.price)
          setProductsAll(res)
        } else if (value === "Z-A") {
          let res = all.sort(((a ,b) => (a.name.length < b.name.length ? -1 : 1)))
          setProductsAll(res)
        } else if (value === "A-Z") {
          let res = all.sort((a ,b) => (a.name.length > b.name.length ? -1 : 1) )
          setProductsAll(res)
        }
      }

       let filterCategory = productsAll.filter((el,idx,arr) => {
        return idx === arr.findIndex((e) => e.category === el.category)
       })
      selectChange()
      useEffect(() => {
        selectChange()
      },[value])
    return (
        <div id='hero'>
        <div className="" >     
         <Slider {...settings}>
        <div>
          <img src={herobg} alt="" />
        </div>
        <div>
          <img src={herobg} alt="" />
        </div>
        <div>
          <img src={herobg} alt="" />
        </div>
        <div>
          <img src={herobg} alt="" />
        </div>
        <div>
          <img src={herobg} alt="" />
        </div>
        
      </Slider>
      </div >
   {
    productsAll.length ?   <div className="container">
    <div className="flex items-center gap-10  ">
    {
       productsAll.map((el,ind) => <Category key={ind} el={el}/>)
     }
    </div>
     <div className="flex items-center justify-between mt-8">
     <h1 className='text-3xl ' > Возможно, Вам понравится</h1>
     <select onChange={(e)=> setValue(e.target.value)}
     className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[120px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '> 
       <option value="expensiv">Expensiv</option>
       <option value="cheap">Cheap</option>
       <option value="A-Z">A-Z</option>
       <option value="Z-A">Z-A</option>
        
     </select>
     </div>
   <div className="hero">
   {
       productsAll.map ((el,ind) => <ProductAdd key={ind} el={el}/>)
     }
   </div>
   </div>: null
   }
        </div>
    );
};

export default Hero;