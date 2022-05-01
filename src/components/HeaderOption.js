import React from 'react'
import "./HeaderOption.css"
import Avatar from '@mui/material/Avatar';
import { useSelector } from "react-redux"

function HeaderOption({ Icon, title, avatar, onClick}) {

    const { user } = useSelector(state =>state.userState)

    return (
        <div className="headerOption" onClick={onClick}>
            {Icon && <Icon className="headerOption__icon"/>}
            {avatar && ( 
                <Avatar 
                    className="headerOption__icon" 
                    src={user?.photoUrl}
                    sx={{ width: 25, height: 25 }}
                >
                    {/* if image fails to load the first letter of the email will be the icon */}
                    {user?.email[0].toUpperCase()}
                </Avatar>
            )}
            <h3 className="headerOption__title">
                {title}
            </h3>
        </div>
    )
}

export default HeaderOption