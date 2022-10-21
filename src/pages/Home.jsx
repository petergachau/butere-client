import React from 'react'
import { useSelector } from 'react-redux';
import { navItems } from "../components/NavItems";
import Navbar from '../components/Navbar';
import CartContainer from '../components/CartContainer';
import Modal from '../components/Modal';
import About from './About';
import Hero from './Hero';
import General from './General';
const Home = () => {
    const { isOpen } = useSelector((store) => store.modal);

  return (
    <div className='home'>
<Hero/>
<General/>


    
    </div>
  )
}

export default Home