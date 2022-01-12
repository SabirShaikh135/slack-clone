import React,{useState ,useEffect} from 'react';
import "./Sidebar.css";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon  from '@material-ui/icons/Inbox';
import DraftsIcon  from '@material-ui/icons/Drafts';
import  BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import  PeopleAltIcon  from '@material-ui/icons/PeopleAlt';
import  AppsIcon  from '@material-ui/icons/Apps';
import  FileCopyIcon  from '@material-ui/icons/FileCopy';
import  ExpandLessIcon  from '@material-ui/icons/ExpandLess';
import  ExpandMoreIcon  from '@material-ui/icons/ExpandMore';
import  AddIcon  from '@material-ui/icons/Add';
import SidebarOption from './SidebarOption';
import db from "../firebase";
import { useStateValue } from '../StateProvider';
function Sidebar() {
    const [{user}] =useStateValue();
    const [channels,setChannels] = useState([]);
    
    useEffect(() => {
       db.collection("rooms").onSnapshot((snapshot)=>(
        setChannels(snapshot.docs.map((doc)=>(
            {
                id:doc.id,
                name:doc.data().name,
            }
        )))   
       ))
    }, [])

    return (
        <div className='sidebar sidebarHide'>
            <div className="sidebar_header">
                <div className="sidebar_info">
                  <h2>SSAB Infomation Technology </h2>
                  <h3><FiberManualRecordIcon/>
                  {user?.displayName}
                  </h3>
                 </div>
                 <CreateIcon/>
                 
            </div>
           
            <SidebarOption Icon={InsertCommentIcon} title="threads"/>
            <SidebarOption Icon={InboxIcon} title="Mentions & Reactions"/>
            <SidebarOption Icon={DraftsIcon} title="Saved Items"/>
            <SidebarOption Icon={BookmarkBorderIcon} title="channel Browser"/>
            <SidebarOption Icon={PeopleAltIcon} title="People & User Group"/>
            <SidebarOption Icon={AppsIcon} title="Apps"/>
            <SidebarOption Icon={FileCopyIcon} title="File Browser"/>
            <SidebarOption Icon={ExpandLessIcon} title="Show Less"/>
            <hr/>
            <SidebarOption Icon={ExpandMoreIcon} title="Show More"/>
            <hr/>
            <SidebarOption Icon={AddIcon} title="Create Group" addChannelOption/>
            {/* <SidebarOption  title="youtube"/> */}
            {
                channels.map(channel=>(
                    <SidebarOption title={channel.name} id={channel.id}/>
                ))
            }
            
        </div>
    )
}

export default Sidebar
