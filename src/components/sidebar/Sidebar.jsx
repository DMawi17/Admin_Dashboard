import React from 'react'
import "./sidebar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PersonIcon from "@mui/icons-material/Person";
import BackpackIcon from "@mui/icons-material/Backpack";
import EuroIcon from "@mui/icons-material/Euro";
import AssessmentIcon from "@mui/icons-material/Assessment";
import EmailIcon from "@mui/icons-material/Email";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import WorkIcon from "@mui/icons-material/Work";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link home_link">
                            <li className="sidebarListItem active">
                                <LineStyleIcon className="sidebarIcon" />
                                Home
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <TimelineIcon className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUpIcon className="sidebarIcon" />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link users_link">
                            <li className="sidebarListItem ">
                                <PersonIcon className="sidebarIcon" />
                                Users
                            </li>
                        </Link>
                        <Link to="/products" className="link products_link">
                            <li className="sidebarListItem">
                                <BackpackIcon className="sidebarIcon" />
                                Products
                            </li>
                        </Link>

                        <li className="sidebarListItem">
                            <EuroIcon className="sidebarIcon" />
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <AssessmentIcon className="sidebarIcon" />
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            <EmailIcon className="sidebarIcon" />
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeedIcon className="sidebarIcon" />
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleIcon className="sidebarIcon" />
                            Message
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            <WorkIcon className="sidebarIcon" />
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <ShowChartIcon className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <InfoIcon className="sidebarIcon" />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
