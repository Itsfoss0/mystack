import { useState, useEffect } from 'react';
import Dev from './components/Dev/Dev';
import getDevs from './services/getDevsInfo';
import './index.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

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
      <Header content='GDSC UOE' />
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
