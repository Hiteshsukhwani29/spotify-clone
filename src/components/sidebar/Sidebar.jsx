import React from 'react';
import SpotifyLogo from '../../assets/logo_white';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryIcon from '@material-ui/icons/LibraryMusic';
import CreatePlaylistIcon from '@material-ui/icons/AddBox';
import LikedIcon from '@material-ui/icons/Favorite';

function Sidebar() {
  return (
    <div className='min-h-screen flex-[0.2] bg-[#000000] min-w-[230px] text-white px-3'>
        <SpotifyLogo />
        <SidebarOption Icon={HomeIcon} Text="Home"/>
        <SidebarOption Icon={SearchIcon} Text="Search"/>
        <SidebarOption Icon={LibraryIcon} Text="Your library"/>
        <div className='h-6'></div>        
        <SidebarOption Icon={CreatePlaylistIcon} Text="Create Playlist"/>
        <SidebarOption Icon={LikedIcon} Text="Liked Songs"/>
        <div className='h-[0.07px] mx-3 mt-2 bg-[#282828] mb-3'></div>
        <SidebarOption Text="Jazz"/>
        <SidebarOption Text="Hip Hop"/>
        <SidebarOption Text="Mega Punjabi Hits"/>
    </div>
  )
}

export default Sidebar