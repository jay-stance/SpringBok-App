import React from 'react'
import AppText from '../AppText/AppText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./NavItem.css"

const NavItem = ({style, name, active, icon, navClicked}) => {
    const active_link = active == name? "active": "";

    return (
        <div className={`nav_element ${active_link}`} style={style} onClick={() => navClicked(name)} >
            <FontAwesomeIcon className='icon' icon={icon} />
            <AppText name={name} invert={true}/>
        </div>
    )
}


export default NavItem