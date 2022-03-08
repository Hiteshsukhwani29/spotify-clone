import React from 'react'

function SidebarOption({ Icon, Text }) {
  return (
    <div>
      <div className='text-gray hover:text-white transition-colors h-10 cursor-pointer flex align-middle'>
        {Icon && <Icon className='mx-3 text-gray' />}
        {Icon ? <h1>{Text}</h1> : <p className='mx-3 text-sm'>{Text}</p>}
      </div>
    </div>
  )
}

export default SidebarOption