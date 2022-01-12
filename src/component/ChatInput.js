import React, { useState } from 'react';
import "./ChatInput.css";
import {Button} from "@material-ui/core";
import { useStateValue } from '../StateProvider';
import db from '../firebase';
import firebase from 'firebase';

function ChatInput({ channelName, channelId }) {
    const [input,setInput] =useState("");
    const [{user}] =useStateValue();
    const sendMessage =(e)=>{
        e.preventDefault();
        if (!input) return false;
       if(channelId){
        db.collection('rooms').doc(channelId).collection('messages').add({
            message:input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            username:user.displayName,
            userimage:user.photoURL,
         });
       }
       setInput("");
    //    window.scroll(0, document.body.offsetHeight);
    }
    return (
        <div className='chatInput'>
            <form>
                <input
                 value={input}
                 onChange={(e)=>setInput(e.target.value)}
                 placeholder={`Type Message #${channelName}`}/>
                <button type="submit" onClick={sendMessage}>Send</button> 
            </form>
        </div>
    )
}

export default ChatInput
