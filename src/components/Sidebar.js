import React from 'react'
import Avatar from '@mui/material/Avatar';
import "./Sidebar.css";
import imagetop from "../assets/imagetop.jpg"
import TagIcon from '@mui/icons-material/Tag';
import { useSelector } from "react-redux";

function Sidebar() {

    const { user } = useSelector(state => state.userState)

    const recentItem = (topic) =>{
        return(
            <div className="sidebar__recentItem">
                <TagIcon />
                <p>{topic}</p>
            </div>
        )
    }

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src={imagetop}  alt="" />
                <Avatar 
                    className="sidebar__avatar" 
                    src={user.photoUrl}
                    >
                        {user.displayName[0].toUpperCase}
                    </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed your profile</p>
                    <p className="sidebar__statnumber">2,343</p>
                </div>
                <div className="sidebar__stat">
                    <p>Impressions of your post</p>
                    <p className="sidebar__statnumber">7,343</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("react-js")}
                {recentItem("programming")}
                {recentItem("software")}
                {recentItem("design")}
            </div>

        </div>
    )
}

export default Sidebar 