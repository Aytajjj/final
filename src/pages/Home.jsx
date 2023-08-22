import React from 'react'
import Header from '../components/Header';
import Slider from "../components/Slider";
import Rezerv from "../components/Rezerv";
import Menu from "../components/Menu";
import Cards  from "../components/Cards";
import Photos from "../components/Photos";
import Takeout from "../components/Takeout";
import Footer from "../components/Footer";





const Home = () => {
  return (
    <div>
      <Header />
      <Slider />
      <Rezerv />
      <Menu />
      <Cards />
      <Photos />
      <Takeout />
      <Footer />
    </div>
  );
}

export default Home