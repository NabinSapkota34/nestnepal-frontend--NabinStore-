import React from 'react';
import Navbar from '../components/Navbar';
import Homesection from '../components/Homesection';
import Products from '../components/ProductsPage';
import AboutUs from '../components/Aboutus';
// import Menu from '../components/Menu';
import Footer from '../components/Footer';
// import WorkCard from '../components/WorkCard';
const Home = () => {
  return (
    <>
    <Navbar />
    <Homesection />
    <AboutUs />
    <Products />
    {/* <Menu />  */}
    <Footer /> 
    </>
  )
}

export default Home