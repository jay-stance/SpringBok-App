import React, {useState} from 'react'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import profile from '../../assets/profile.png'
import AppText from '..//AppText/AppText'
import NavItem from '../NavItem/NavItem'
import "./Sidebar.css"

export default function Sidebar() {
    const [resturants, setresturants] = useState(["Vine Kitchen", "Cresta", "Tasty Vine", "Your Choice"]);
    const [dropDown, setDropDown] = useState(false);
    const [activeLink, setActiveLink] = useState("");

  return (
    <div className="sidebar">
      <div className="user_card">
        <img className='profile_img' src={profile} alt="profile Image" />
        <AppText invert={true} name="Jay Stance Dev" />
        <AppText invert name="Bursar" />
        <AppText invert name="Super Admin" style={{ fontWeight: "100", fontSize: 13 }} />
      </div>    

      <div className="sidebar__menu">
        <Link style={{textDecoration: "none"}} to="/">
          <NavItem active={activeLink} name="Dashboard" icon={faCoffee} navClicked={(name) => setActiveLink(name)} />
        </Link>

        <Link style={{textDecoration: "none"}} to="/users">
          <NavItem active={activeLink} name="Users" icon={faCoffee} navClicked={(name) => setActiveLink(name)} />
        </Link>
  
        <Link style={{textDecoration: "none"}} to="/resturants">
          <NavItem active={activeLink} name="resturants" icon={faCoffee} navClicked={(name) => {
            setDropDown(!dropDown)
            setActiveLink(name)
          }} />
        </Link>

        {dropDown && activeLink == "resturants" && resturants.map(resturant => {
          return (
            <Link style={{textDecoration: "none"}} to={`/resturantsDetail/${resturant}`}>
              <NavItem name={resturant} icon={faCoffee} style={{backgroundColor: "#808495"}} />
            </Link>
          )
        })}
        
        <Link style={{textDecoration: "none"}} to="/wallets">
          <NavItem active={activeLink} name="Wallets" icon={faCoffee} navClicked={(name) => setActiveLink(name)} />
        </Link>
  
        <Link style={{textDecoration: "none"}} to="/fundWallets">
          <NavItem active={activeLink} name="Fund Wallets" icon={faCoffee} navClicked={(name) => setActiveLink(name)} />
        </Link>

      </div>
    </div>
  )
}
