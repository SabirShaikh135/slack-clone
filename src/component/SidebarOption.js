import React from 'react';
import "./SidebarOption.css";
import db from "../firebase";
import { useNavigate } from 'react-router-dom';
function SidebarOption({Icon,title,id,addChannelOption}) {
    const navigate = useNavigate();
    const selectChannel=()=>{
        if(id){
            navigate(`/room/${id}`);
        }
        else{
            navigate(title);
        }
    }
    const addChannel=()=>{
        const channelName= prompt("please enter the Group name");
        if(channelName){
            db.collection("rooms").add({
                name:channelName,
                    
            })
        }
    }
    return (
        <div className='sidebaroption' onClick={addChannelOption ? addChannel:selectChannel}>
            {
                Icon && <Icon className="sidebaroption_icon"/>
            }
            {
                Icon ? (<h3>{title}</h3>):
                (<h3 className='sidebaroption_channel'><span className='sidebaroption_hash'># </span>{title}</h3>)
            }
        </div>
    )
}

export default SidebarOption
