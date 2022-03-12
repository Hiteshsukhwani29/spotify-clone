import React from 'react'
import RightIcon from '@material-ui/icons/ChevronRight'
import LeftIcon from '@material-ui/icons/ChevronLeft'

function Header() {
  return (
    <div className='flex'>
      <div className='flex-1 max-w-[90px] flex justify-between items-start'>
        <div className="h-10 w-10 rounded-full bg-spotify-dark-footer-bg opacity-90 flex justify-center items-center">
          <LeftIcon />
        </div>
        <div className="h-10 w-10 rounded-full bg-spotify-dark-footer-bg opacity-90 flex justify-center items-center">
          <RightIcon />
        </div>
      </div>
      <div className='flex-1 flex justify-end items-start space-x-4'>
        <div className="h-10 w-32 text-xs border-collapse border-[1px] rounded-full bg-spotify-dark-footer-bg opacity-90 flex justify-center items-center">
          UPGRADE
        </div>
        <img className="h-10 w-10 rounded-full bg-spotify-dark-footer-bg opacity-90 flex justify-center items-center" src=""/>
      </div>
    </div>
  )
}

export default Header