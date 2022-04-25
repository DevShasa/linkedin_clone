import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import linkedin_logo from "../assets/linkedin.png"

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src={linkedin_logo} alt="linkedin logo" />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text"  />
                </div>    
            </div>
            <div className="header__rignt">

            </div>
        </div>
    )
}

export default Header