import React, { useContext } from 'react';
import { BookshopContext } from '../../components/context';
import { useParams } from 'react-router-dom';

const DetailsBook = () => {
    const {productsAll} = useContext(BookshopContext)
    let {bookId} = useParams()
    let findBooks = productsAll.find((el) => el.id === +bookId )
    console.log(findBooks);
    return (
        <div className='container'>
            <div className="mt-10 flex items-start gap-20">
                <img src={findBooks.url}alt="img" />
                <div className="book">
                    <h1> <span>name:</span> {findBooks.name}</h1>
                    <h2> <span>category:</span> {findBooks.category}</h2>
                    <h3> <span>description:</span> {findBooks.description}</h3>
                </div>
            </div>
        </div>
    );
};

export default DetailsBook;