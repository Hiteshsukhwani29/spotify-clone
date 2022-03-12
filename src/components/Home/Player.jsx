import React, { useEffect, useRef } from 'react'
import Header from './Header';

function Player({ spotify }) {
  console.log(spotify);
  const playlistimageRef = useRef("playlistimageRef");
  let playlistimage;

  useEffect(() => {
    spotify.getPlaylist("37i9dQZF1DX29AbHCRoac8").then((r) => {
      playlistimage = r.images[0].url;
    })
    playlistimageRef.current.src = playlistimage;
  });

  return (
    <div className='flex-[0.8] bg-gradient-to-b from-[#062244] via-[#000000] to-[#000000] h-screen p-7 text-white'>
      <Header />
      <div className='flex'>
        <img className='h-56 mt-8' ref={playlistimageRef} src="" />
        <div className='mb-0 mt-auto px-4 pt-4 justify-end'>
          <div className='font-bold text-xs mt-1'>PLAYLIST</div>
          <div className='text-5xl font-black py-[0.08em]'>Mega Punjabi Hits</div>
          <div className='text-base font-normal mt-2'>A mega mix of your Punjabi favorites from the last few years.</div>
          <div className='text-sm font-bold mt-2'>Spotify &bull; 709,248 likes &bull; 50 songs, 3 hr 12 min</div>
        </div>
      </div>
    </div>
  )
}

export default Player