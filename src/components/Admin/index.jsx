import React, { useContext, useState } from 'react';
import { BookshopContext } from '../context';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const {setModal,setAdmin} = useContext(BookshopContext)
    const [input,setInput] = useState("")
    const nav = useNavigate()
   const addToProduct = () => {
         nav("/productAll")
         setModal(false)
         setAdmin(true)
    }

    return (
        <div id='admin'>
            <div className="container">
                <div className="admin">
                    <h1 onClick={() => setModal(false)}>X</h1>
                    <input type="password" placeholder="password..." onChange={(e) => setInput(e.target.value)} />
                    <button onClick={input === "0000" ? () => addToProduct() : null} >SIGN IN</button>
                </div>
            </div>
            
        </div>
    );
};

export default Admin;