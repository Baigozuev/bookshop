import React, { useContext, useState } from 'react'
import logo from "../../img/BOOKShop.svg"
import { FaCartShopping } from "react-icons/fa6";
import { RiAdminFill } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';
import { BookshopContext } from '../context';
import Admin from '../Admin';


const Header = () => {
  const nav = useNavigate()
  const [input,setInput] = useState("")
  const {modal,setModal,admin,basket} = useContext(BookshopContext)
  return (
    <div id='header'>
        <div className="container">
          <div className="header">
           <Link to={"/"}>
           <img src={logo} alt="img" />
           </Link>
            <div className="header--nav">
              <input onChange={(e) => setInput(e.target.value)}
              type="text"  placeholder='Search here'/>
              <button onClick={() => nav(`/Search${input}`)} >Search</button>
              {
                basket.length ? <h5>{basket.length}</h5> : null
              }

                <Link to={"/basket"}><FaCartShopping/>
                Корзина
                </Link>
               {
                admin ? null :  <Link to={"/admin"} onClick={() => setModal(true)}><RiAdminFill />
                Админ
                </Link>
               }

            </div>
          </div>
          {
            modal ? <div className="bg" onClick={() => setModal(false)}></div> : null

          }
          {
         
          modal ?  <Admin/> : null
          }
        </div>
      
    </div>
  )
}

export default Header


