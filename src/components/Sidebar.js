import React from 'react'
import Avatar from '@mui/material/Avatar';
import "./Sidebar.css";
import imagetop from "../assets/imagetop.jpg"
import TagIcon from '@mui/icons-material/Tag';

function Sidebar() {

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
                <Avatar className="sidebar__avatar"/>
                <h2>Shasa Thuo</h2>
                <h4>shasa.thuo@gmail.com</h4>
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