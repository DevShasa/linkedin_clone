import React from 'react'
import "./Feed.css"
import CreateIcon from '@mui/icons-material/Create';
import InputOption from "./InputOption";
import PhotoIcon from '@mui/icons-material/Photo';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Post from "./Post";

function Feed() {
    return (
        <div className="feed">

            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" />
                        <button type="submit">
                            Send
                        </button>
                    </form> 
                </div>

                <div className="feed__inputOptions">
                    <InputOption Icon={PhotoIcon} color="#42EBE0" optionName="Photo"/>
                    <InputOption Icon={VideoCameraFrontIcon} color="#32D621" optionName="Video"/>
                    <InputOption Icon={InsertInvitationIcon} color="#FAB72A" optionName="Event"/>
                    <InputOption Icon={NewspaperIcon} color="#F5569D" optionName="Write article"/>
                </div>
            </div>

            <Post 
                name="Shasa Thuo"
                description = "This is the description "
                message="wOLAN SHATade love an peace to all"
            />

        </div>
    )
}

export default Feed