import React from 'react'
import ReplayIcon from '@mui/icons-material/Replay';
import ViewListIcon from '@mui/icons-material/ViewList';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Workspace.scss'

export const Workspace  = () => {
  return (
    <div className='flex'>
      <div className='menu'>
      <div><ReplayIcon  className='item'/></div>
      <div><ViewListIcon  className='item'/></div>
      <div><SettingsRoundedIcon className='item' /></div> 
      </div>
      <div className='menu'>
           <div>
           <AccountCircleIcon className='item' />
        </div>
        
      </div>
       
    </div>
  )
}
