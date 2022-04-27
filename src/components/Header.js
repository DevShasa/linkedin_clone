import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import linkedin_logo from "../assets/linkedin.png"
import personal_avatar from "../assets/avatar.jpeg"
import HeaderOption from "./HeaderOption"
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterSharpIcon from '@mui/icons-material/BusinessCenterSharp';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';

function Header() {
    return (
        <div className="header">
            <div className="header__body">
                <div className="header__left">
                    <img src={linkedin_logo} alt="linkedin logo" />
                    <div className="header__search">
                        <SearchIcon />
                        <input type="text"  />
                    </div>    
                </div>
                <div className="header__right">
                    <HeaderOption title="Home" Icon={HomeIcon}/>
                    <HeaderOption title = "My Network " Icon={SupervisorAccountIcon}/>
                    <HeaderOption title="jobs" Icon={BusinessCenterSharpIcon} />
                    <HeaderOption title="messaging" Icon={MessageRoundedIcon}/>
                    <HeaderOption title="Notification" Icon={NotificationsRoundedIcon}/>
                    <HeaderOption title="me" avatar ={personal_avatar}/>
                </div>
            </div>
        </div>
    )
}

export default Header