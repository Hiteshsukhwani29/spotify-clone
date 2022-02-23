import React from 'react'
import { useSelector } from 'react-redux'

function Home() {

  const state = useSelector(state => state.user)
  console.log("working =>"+state);
  return (
    <div>Home</div>
  )
}

export default Home