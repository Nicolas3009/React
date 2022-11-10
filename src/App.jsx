
import './App.css';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App = () => {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:idCategoty' element={<ItemListContainer/>} />
        <Route path='/item/:idItem' element={<ItemDetailContainer />} />
        <Route path= '/cart' element={<Cart/>} />
      </Routes>
    </BrowserRouter>

  );
}
export default App;
