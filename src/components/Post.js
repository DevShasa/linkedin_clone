import React, { forwardRef } from 'react'
import "./Post.css"
import Avatar from '@mui/material/Avatar'
import InputOption from './InputOption'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const Post = forwardRef(({name, description, message, photoUrl}, ref) => {
    return (
        <div ref ={ref} className="post">

            <div className="post__header">
                <Avatar 
                    src={photoUrl}
                />
                <div className="post__info">
                    <span>{name}</span>
                    <p>
                        {description}
                    </p>
                </div>
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>
            
            <div className="post__buttons">
                <InputOption Icon={ThumbUpOutlinedIcon} color="#808080" optionName="Like"/>
                <InputOption Icon={CommentOutlinedIcon} color="#808080" optionName="Comment"/>
                <InputOption Icon={ShareOutlinedIcon} color="#808080" optionName="Share"/>
                <InputOption Icon={SendOutlinedIcon} color="#808080" optionName="Send"/>
            </div>

        </div>
    )
});

export default Post