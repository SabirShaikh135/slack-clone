import React from 'react';
import "./Header.css";
import {Avatar} from "@material-ui/core";
import AccessTimeicon from '@material-ui/icons/AccessTime';
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineicon from '@material-ui/icons/HelpOutline';
import { useStateValue } from '../StateProvider';

function Header() {
    const [{user}] =useStateValue();
    return (
        <div className='header'>
            <div className="header_left">
                <Avatar
                    className='header_avatar'
                    alt={user?.displayName}
                    src={user?.photoURL}
                    className="muisvgicon_root"
                />
                <div className="header_accessTimeicon">
                <AccessTimeicon/>
                </div>
            </div>
            <div className="header_search">
            <SearchIcon/>
            <input placeholder='Search'/>
            </div>
            <div className="header_right">
            <HelpOutlineicon/>
            </div>
        </div>
    )
}

export default Header
