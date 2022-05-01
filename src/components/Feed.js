import React, {useState, useEffect} from 'react'
import "./Feed.css"
import CreateIcon from '@mui/icons-material/Create';
import InputOption from "./InputOption";
import PhotoIcon from '@mui/icons-material/Photo';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Post from "./Post";
import { db }  from "../firebase/firebase";
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import { useSelector } from 'react-redux';

function Feed() {

    const { user } = useSelector(state=>state.userState)

    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        // create a real time listener to firebase, snapshot 
        // Anytime the database changes it will update here too
        db.collection("posts")
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot =>(setPosts(snapshot.docs.map(doc=>(
                {id: doc.id, data: doc.data()}
            )))
        ))
    }, [])

    const sendPost = (e) =>{
        e.preventDefault();
        
        // Push item to firestore database, wll be added as a new document
        db.collection("posts").add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput("")
    }

    return (
        <div className="feed">

            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} type="text" onChange ={(e) =>setInput(e.target.value)} />
                        <button type="submit" onClick = {sendPost} >
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

            {/* <Post 
                name="Shasa Thuo"
                description = "This is the description "
                message="wOLAN SHATade love an peace to all"
            /> */}
            <div>
                {posts.length === 0
                    ? (
                        <div>There are no posts at the moment</div>
                    )
                    : (
                        <FlipMove>
                            {posts.map(({id, data:{name, description, message, photoUrl}})=>{
                                return(
                                    <Post 
                                        key={id}
                                        name={name}
                                        description={description}
                                        message={message}
                                        photoUrl={photoUrl}
                                    />
                                )
                            })}
                        </FlipMove>
                    )
                }
            </div>


        </div>
    ) 
}

export default Feed