import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/login/Login';
import { getUrlToken } from './components/login/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Home from './components/Home/Home';
import { useDispatch } from 'react-redux';
import {actionCreators} from './state/index';

function App() {

  const spotify = new SpotifyWebApi()

  const dispatch = useDispatch()

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
        dispatch(actionCreators.setUser(user))
        dispatch(actionCreators.setToken(_token))
      })
      spotify.getUserPlaylists().then((playlist) => {
        dispatch(actionCreators.setPlaylist(playlist))
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
