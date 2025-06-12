import { useEffect } from 'react';
import CardContainer from './components/CardContainer';
import Spread from './components/Spread';

function App() {
  useEffect(() => {
    const getData = async () => {
      const response = await fetch('/api/cards');
      const data = await response.json();
      console.log(data);
    };

    getData();
  }, []);

  return (
    <div className="h-screen flex flex-row justify-between items-center mx-20">
      <CardContainer />
      <Spread />
      <CardContainer />
    </div>
  );
}

export default App;
