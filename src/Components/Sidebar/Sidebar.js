import React from 'react';
import SidebarRow from '../SidebarRow/SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';

import "./Sidebar.css";
import { useStateValue } from '../../StateProvider';

function Sidebar() {
    const [{user}, dispatch] = useStateValue();

    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName}/>
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
