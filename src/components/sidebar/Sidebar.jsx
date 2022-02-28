import React from 'react';
import SpotifyLogo from '../../assets/logo_white';
import SidebarOption from './SidebarOption';

function Sidebar() {
  return (
    <div className='min-h-screen flex-[0.2] bg-[#000000] min-w-[230px] text-white px-3'>
        <SpotifyLogo />
        <SidebarOption Text="Home"/>
        <SidebarOption Text="Search"/>
        <SidebarOption Text="Your library"/>
    </div>
  )
}

export default Sidebar