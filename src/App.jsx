
import './App.css';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App = () => {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:idCategoty' element={<ItemListContainer/>} />
        <Route path='/detalle' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>

  );
}
export default App;
