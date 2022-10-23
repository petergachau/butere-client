import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';

import Modal from './components/Modal';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
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
import Login from './pages/Login';
import Register from './pages/Register';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setUser } from './redux/features/authSlice';
import Form4East from './pages/Classes/Form4East';
import Admin from './pages/Admin';
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
  const dispatch = useDispatch();
  const[data,setDate]=useState([])
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(setUser(user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <BrowserRouter>
    <ToastContainer/>
    
    <Navbar/>
    <Topbar/>
    
      
      
      {/* <Submenu /> */}
    
    <Routes>
      <Route path='/' element={<Home/>}/>
   <Route path='/about' element={<About/>}/>
   <Route path='/academics' element={<Academics/>}/>
   <Route path='/tenders' element={<Tenders/>}/>
   <Route path='/contact' element={<Contact/>}/>
   <Route path='/students' element={<Students/>}/>
   <Route path='/teachers' element={<Teachers/>}/>
   <Route path='/stuffs' element={<Stuffs/>}/>
   <Route path='/login' element={<Login/>}/>
   <Route path='/register' element={<Register/>}/>
   <Route path='/library' element={<Library/>}/>
   <Route path='/form4east' element={<Form4East/>}/>
   <Route path='/admin' element={<Admin/>}/>

    </Routes>
   
    <Footer/>
    </BrowserRouter>
    
  );
}
export default App;
