import React from 'react'
import { useSelector } from 'react-redux'

function Home() {

  const state = useSelector(state => state.t1);
  console.log(state);

  return (
    <div>Home</div>
  )
}

export default Home