import React from 'react';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';

import "./Sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="https://lh3.googleusercontent.com/ogw/ADGmqu_d27TwMorM94HjiswdquBP7_bBow2rGU59vQG2=s192-c-mo" title="JSYOvO"/>
            <SidebarRow Icon={LocalHospitalIcon} title="COVID19 Infomation Center"/>
            <SidebarRow Icon={EmojiFlagIcon} title="Pages"/>
            <SidebarRow Icon={PeopleIcon} title="Friends"/>
            <SidebarRow Icon={ChatIcon} title="Messenger"/>
            <SidebarRow Icon={StorefrontIcon} title="MarketPlace"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
            <SidebarRow Icon={ExpandMoreOutlined} title=""/>
        </div>
    )
};

export default Sidebar;
