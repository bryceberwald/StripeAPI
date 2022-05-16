import './App.css';
import StripeContainer from './components/StripeContainer';
import hammer from './assets/hammer.jpeg';
import { useState } from 'react';

function App() {

  const [showItem, setShowItem ] = useState(false);

  return (
    <div className="App">
      <h1>Welcome to the Hammer Store!</h1>
      {showItem ? <StripeContainer /> : <> <h3>$10.00</h3><img src={hammer} alt="hammer"></img><button onClick={() => setShowItem(true)}>Purchase Hammer</button> </>}
    </div>
  );
}

export default App;
