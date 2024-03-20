import React, { useContext,useEffect} from 'react';
import { BookshopContext } from '../context';
import CountUp from 'react-countup';
const Basket = () => {
   
    const {basket,setBasket} = useContext(BookshopContext)
    const deleteBook = (data) => {
        localStorage.setItem("basket", JSON.stringify([...basket.filter((el) => el.id !== data.id)]))
    }


    const readProduct = () => {
        let result = JSON.parse(localStorage.getItem("basket")) ||[]
        setBasket(result)
      }
       const incrementQuantity = (data) => {
        let findBas = basket.find((el) => el.id === data.id)
        if (findBas) {
            let res = basket.map((el) => el.id ===  data.id ? {...el,quantity : el.quantity + 1} : el)
            localStorage.setItem("basket",JSON.stringify(res))
        }
       }

       const decrementQuantity = (data) => {
      let findBas = basket.find((el) => el.id === data.id)
      if (findBas) {
        let res = basket.map((el) => el.id === data.id ? {...el,quantity : el.quantity > 1 ? el.quantity -1 : el.quantity } : el)
        localStorage.setItem("basket",JSON.stringify(res))
      }
       }
      useEffect(() => {
        readProduct()
      },[basket])

      let price = basket.reduce((acc,el) => {
        return acc + el.price * el.quantity
    },0)

    return (
            <div id='basket'>
        <div className='container'>


<div class="relative mt-10 overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" class="px-6 py-3">
                    IMG
                </th>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Quantity
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
           {
            basket.map((el) => (
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                     <td class="px-6 py-4">
                     <img src={el.url} alt="img"width={100} />
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                 {el.name}
                </th>
                <td class="px-6 py-4">
                    {el.category}
                </td>
                <td class="px-6 py-4">
                <CountUp
                 start={0}
                 end={el.price * el.quantity} 
                 duration={2.75}

                 decimals={0}
>
                   </CountUp>
$
                </td>
                <td class="px-6 py-4 flex items-center gap-3 mt-12">
                    <button onClick={()=>incrementQuantity(el)} >+</button>
                    <h2>{el.quantity}</h2>
                    <button onClick={() => decrementQuantity(el)}>-</button>
                </td>
                <td class="px-6 py-4">
                <button onClick={() => deleteBook(el)}
                 type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Red</button>

                </td>
            </tr>
            ))
           }

        </tbody>
    </table>
</div>
<h1 className='text-2xl mt-10'>Tootol Price:{price}$</h1>
</div> 
        </div>
    );
};

export default Basket;