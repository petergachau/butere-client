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
import Library from './pages/Library'
import Academics from './pages/Academics'
import Tenders from './pages/Tenders'
import Teachers from './pages/QickLinks/Teachers'
import Stuffs from './pages/QickLinks/Stuffs'
import Footer from './components/Footer'
import Students from './pages/QickLinks/Students'
import Contact from './pages/Contact';
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
   <Route path='/about' element={<About/>}/>
   <Route path='/academics' element={<Academics/>}/>
   <Route path='/tenders' element={<Tenders/>}/>
   <Route path='/contact' element={<Contact/>}/>
   <Route path='/students' element={<Students/>}/>
   <Route path='/teachers' element={<Teachers/>}/>
   <Route path='/stuffs' element={<Stuffs/>}/>
   <Route path='/library' element={<Library/>}/>
   <Route path='/library' element={<Library/>}/>

    </Routes>
    </AppProvider>
    <Footer/>
    </BrowserRouter>
    
  );
}
export default App;
