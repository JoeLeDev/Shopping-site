import React from 'react'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Men/Products'
import Women from './components/Women/Women'
import Soldes from './components/Soldes/Soldes'
import NewsLetter from './components/NewsLetter/NewsLetter'
import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset:100,
      duration: 800,
      easing: 'ease-in-sine',
    delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className=''>
      <Navbar />
      <Hero />
      <Products />
      <Women />
      <Soldes />
      <NewsLetter />
    </div>
  )
}

export default App
