import React,{useState,useEffect} from 'react';
import "./Chat.css";
import {useParams} from "react-router-dom";
import  StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import  InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from '../firebase';
import Message from './Message';
import { ChatBubbleOutlineOutlined } from '@material-ui/icons';
import ChatInput from './ChatInput';

function Chat() {
    const {roomId} =useParams();
    const [roomDetails, setroomDetails] =useState(null)
    const [roomMessages, setRoomMessages] =useState([])

    useEffect(() => {
        if(roomId){
            db.collection('rooms')
            .doc(roomId)
            .onSnapshot(snapshot=>setroomDetails(snapshot.data()))
            }
        
            db.collection('rooms')
            .doc(roomId)
            .collection('messages')
            .orderBy('timestamp','asc')
            .onSnapshot((snapshot)=>
            setRoomMessages(snapshot.docs.map((doc)=>doc.data()))
            );
            
    }, [roomId]);
    console.log(roomDetails);
    console.log("mesagees>>>>",roomMessages);
    return (
        <div className='chat'>
            <h2>  You are in {roomDetails?.name} room </h2>
            <div className="chat_header">
            <div className="chat_header_left">
                <h4 className="chatchannel_name">
                    <strong>#{roomDetails?.name}</strong>
                    <StarBorderOutlinedIcon/>
                </h4>
            </div>
            <div className="chat_header_right">
                <p onClick={()=>alert("Created By SSAB Infomation Technology")}>
                    <InfoOutlinedIcon/>Details
                </p>
            </div>
            </div>

            <div className="chat_messages">
                {
                    roomMessages.map(({message,timestamp,username,userimage})=>(
                        <Message
                            message={message}
                            timestamp={timestamp}
                            username={username}
                            userimage={userimage}
                            key={timestamp}
                        />
                    ))
                }
            </div>
            <ChatInput channelName={roomDetails?.name} channelId={roomId}/>

        </div> 
    )
}

export default Chat
