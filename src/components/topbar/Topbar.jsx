import React from "react";
import "./topbar.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">DmawiAdmin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNoneIcon />
                        <span className="topIconBag">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <LanguageIcon />
                    </div>
                    <div className="topbarIconContainer">
                        <SettingsIcon />
                    </div>
                    <img
                        src="https://cdn.pixabay.com/photo/2021/10/14/08/15/child-6708419_960_720.png"
                        alt="avatar"
                        className="topAvatar"
                    />
                </div>
            </div>
        </div>
    );
}
