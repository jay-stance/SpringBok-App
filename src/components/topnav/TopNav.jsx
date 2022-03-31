import React from 'react'
import AppText from '../AppText/AppText';
import "./TopNav.css"

const TopNav = () => {
  return (
    <div className='TopNav'>
      <AppText invert={true} name="SpringBok" style={{ fontWeight: "700", letterSpacing: "8px", fontSize: 25 }} />
    </div>
  )
}

export default TopNav;