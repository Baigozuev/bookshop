import React from 'react';
import { useNavigate } from 'react-router-dom';

const Category = ({el}) => {
    let nav = useNavigate()
    return (
        <div className='w-[300px] h-[150px] mt-10' style={{
            background: `url(https://as1.ftcdn.net/v2/jpg/05/65/92/20/1000_F_565922032_Gn4q771fkpYPLLq9jHZqfeKhhEy0lJVS.jpg)`
        }}>
            <h1 onClick={() => nav (`/categoryProduct/${el.category}`)}
            className='text-white ml-3 uppercase mt-28 cursor-pointer' >{el.category}</h1>
        </div>
    );
};

export default Category;