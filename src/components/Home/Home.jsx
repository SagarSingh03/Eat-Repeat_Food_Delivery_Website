import React, { useEffect, useState } from 'react'
import './Home.css'
import Background from '../Background/Background';
import Hero from '../Hero/Hero';
import Menu from '../Menu/Menu';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Home = ({onAddToCart}) => {
  let heroData = [
    {text1: "Crave it", text2: "Get it delivered"},
    {text1: "Hot meals", text2: "At your doorstep"},
    {text1: "Your hunger", text2: "Our priority"},
    {text1: "Order now", text2: "Savor in minutes"}
  ]
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const interval = setInterval (() => {
      setHeroCount((count) =>  (count === 3 ? 0 :  count + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <>
    <div className='Home'>
      <div className="home"> 
      <Navbar/>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Hero setPlayStatus={setPlayStatus}
      heroData={heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playStatus={playStatus}/>
      <Menu onAddToCart={onAddToCart}/>
      <About/>
      <Contact /> 
      <Footer />     
    </div>
    </div>
    </>
  )
}
export default Home;

