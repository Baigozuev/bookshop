import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero';
import Basket from './components/Basket';
import ProductAll from './components/ProductAll';
import DetailsBook from './pages/DetailsBook';
import CategoryProduct from './components/CategoryProduct';
import Search from './components/Search';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/'element={<Hero/>}/>
        <Route path='/basket'element={<Basket/>}/>
         <Route path='/productall' element={<ProductAll/>}/>
         <Route path='/details/:bookId' element={<DetailsBook/>}/>
         <Route path='/categoryProduct/:categoryBook' element={<CategoryProduct/>}/>
         <Route path='/search/:nameSearch' element={<Search/>}/>


      </Routes>
    </div>
  );
}

export default App;
