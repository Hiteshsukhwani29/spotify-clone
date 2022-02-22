import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/login/Login';
import { getUrlToken } from './components/login/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Home from './components/Home/Home';

function App() {

  const spotify = new SpotifyWebApi()

  const [token, settoken] = useState(null);

  useEffect(() => {
    const hash = getUrlToken();
    const _token = hash.access_token;
    window.location.hash = "";
    if (_token) {
      settoken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        console.log(user);
      })
    }
  }, [])


  return (
    <div className="App">
      {token ? (
        <Home />
      )
        : (<Login />)
      }
    </div>
  );
}

export default App;
