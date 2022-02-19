import { useEffect } from 'react';
import './App.css';
import Login from './components/login/Login';
import { getUrlToken } from './components/login/spotify';

function App() {

  useEffect(() => {
    const token = getUrlToken();
    console.log(token);
  }, [])
  

  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
