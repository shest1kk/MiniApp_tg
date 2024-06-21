import './App.css';
import { useTelegram } from './hooks/useTelegram';
import { useEffect } from 'react';
import backgroundMainImage from '../src/assets/background-main.jpg';

function App() {


  const {tg} = useTelegram(backgroundMainImage);
  

  useEffect( () => {
    tg.ready();
  }, [])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
