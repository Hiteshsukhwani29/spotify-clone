import React from 'react'
import { useSelector } from 'react-redux'
import Footer from '../footer/Footer';
import Sidebar from '../sidebar/Sidebar';
import Player from './Player';

function Home() {

  const state = useSelector(state => state.t1);
  console.log(state);

  return (
    <div className='home'>
      <div className="home-body flex">
        <Sidebar />
        <Player/>
      </div>
      <div className="home-footer">
        <Footer/>
      </div>
    </div>
  )
}

export default Home