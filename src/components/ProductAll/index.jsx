import React, { useContext, useEffect, useState } from 'react';
import { BookshopContext } from '../context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';





const ProductAll = () => {
    const [productImg,setProductImg] = useState("")
    const [productName,setProductName] = useState("")
    const [productCategory,setProductCategory] = useState("")
    const [productPrice,setProductPrice] = useState("")
    const [ProductDescription,setProductDescription] = useState("")
    const {productsAll , setProductsAll,setAdmin} = useContext(BookshopContext)
    
 const nav = useNavigate()


let errorProduct = () => 
toast.error('🦄 Wow so easy!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });

    const onChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => setProductImg(reader.result);
        reader.readAsDataURL(file);
      };
    
    const addProduct= () => {
     if (productImg.trim() === "" || productName.trim() === "" || productCategory.trim() === "" || productPrice.trim() === "" || ProductDescription.trim() === "") {
                errorProduct()
     }else {
        let res =JSON.parse(localStorage.getItem("product")) || []
        let newProduct ={
            id:productsAll.length ? productsAll[productsAll.length -1].id + 1 : 1,
            url:productImg,
            name: productName,
            category:productCategory,
            price:productPrice,
            description: ProductDescription,
            quantity: 1,
        }
        let data = [...res,newProduct]
        localStorage.setItem("product",JSON.stringify(data))
        setProductsAll(data)
        setProductImg("")
        setProductName("")
        setProductCategory("")
        setProductPrice("")
        setProductDescription("")
        setAdmin(false)
        nav("/")
     }
    }
const addKeyDown = (e) => {
if (e.key === "Enter") {
    addProduct()
}
}

    useEffect(() => {
       addProduct() 
       
    },[])

    
    return (
        <div id='productall'>
            <div className="container">
                <div className="productall">
                    <label  className='input-file'>
                        <input onChange={onChange}
                        type="file"name='file' />
                        <span>vybyrite fail</span>

                    </label>
                    <div className="productall--inputs">
                        <input onChange={(e) => setProductName(e.target.value)}
                        value={productName}
                        
                        type="text"
                        className='productall--inputs__name' placeholder='Product Name' />
                        <div className="productall--inputs__flex">
                            <input value={productCategory} 
                            onChange={(e) => setProductCategory(e.target.value)}
                            type="text" 
                            className='productall--inputs__flex--category' placeholder='Category' />
                            <input value={productPrice}
                            onChange={(e) => setProductPrice(e.target.value)}
                            type="text" 
                            className='productall--inputs__flex--price' placeholder='Price'/>

                        </div>
                        <textarea 
                        onKeyDown={addKeyDown}
                        value={ProductDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                         name="" id="" cols="27" rows="10" placeholder='Product description...'></textarea>
                        <button onClick={() => addProduct()}>SAVE</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ProductAll;