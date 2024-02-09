import { useState, useEffect } from 'react';
import Dev from './components/Dev/Dev';
import getDevs from './services/getDevsInfo';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './index.css';
import Hero from './components/Hero/Hero';

const App = () => {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allDevs = await getDevs();
        setDevs(allDevs);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <div className='wrapper'>
        {devs.map((dev) => (
          <Dev key={dev.id} dev={dev} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default App;
