import React from 'react'
import { useSelector } from 'react-redux';
import { navItems } from "../components/NavItems";
import Navbar from '../components/Navbar';
import CartContainer from '../components/CartContainer';
import Modal from '../components/Modal';
import About from './About';
import Hero from './Hero';
import General from './General';
import Activities from './Activities';
import Summarypage from './Summarypage';
const Home = () => {
    

  return (
    <div className='home'>
<Hero/>
<Activities
title="Sports"
img='./ppp.png'
/>
<Activities
title="Dinning"
img='./ppp.png'
/>
<Activities
title="Academics"
img='./ppp.png'
/>

<General/>
<Summarypage
/>
</div>
  )
}

export default Home