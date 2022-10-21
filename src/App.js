import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import { AppProvider } from './context';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals, getCartItems } from './features/cart/cartSlice';
import { useEffect } from 'react';
import Modal from './components/Modal';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Topbar from './components/Topbar';
import Home from './pages/Home';
import About from './pages/About';
import Submenu from './components/Submenu';
function App() {
  // const { cartItems, isLoading } = useSelector((store) => store.cart);
  // const { isOpen } = useSelector((store) => store.modal);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(calculateTotals());
  // }, [cartItems]);

  // useEffect(() => {
  //   dispatch(getCartItems('random'));
  // }, []);

  // if (isLoading) {
  //   return (
  //     <div className='loading'>
  //       <h1>Loading...</h1>
  //     </div>
  //   );
  // }

  return (
    <BrowserRouter>
    <AppProvider>
    <Navbar/>
    <Topbar/>
    
      
      
      <Submenu />
    
    <Routes>
      <Route path='/' element={<Home/>}/>
   <Route path='/products' element={<About/>}/>
    </Routes>
    </AppProvider>
    </BrowserRouter>
    
  );
}
export default App;
