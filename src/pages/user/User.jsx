import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import RoomIcon from "@mui/icons-material/Room";
import EmailIcon from "@mui/icons-material/Email";
import PublishIcon from "@mui/icons-material/Publish";
import "./user.css";
import { Link } from "react-router-dom";

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img
                            src="https://cdn.pixabay.com/photo/2018/01/21/14/16/woman-3096664_960_720.jpg"
                            alt=""
                            className="userShowImg"
                        />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">
                                Anna Becker
                            </span>
                            <span className="userShowUserTitle">
                                Software Enginner
                            </span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details </span>
                        <div className="userShowInfo">
                            <AccountCircleIcon className="userShowIcon" />
                            <span className="userShowInfoTitle">Evelyn79</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarTodayIcon className="userShowIcon" />
                            <span className="userShowInfoTitle">
                                Tue Apr 06 1985{" "}
                            </span>
                        </div>
                        <span className="userShowTitle">Contact Details </span>

                        <div className="userShowInfo">
                            <PhoneAndroidIcon className="userShowIcon" />
                            <span className="userShowInfoTitle">
                                +49 1638 92 8397
                            </span>
                        </div>
                        <div className="userShowInfo">
                            <EmailIcon className="userShowIcon" />
                            <span className="userShowInfoTitle">
                                Hoyt_Ferry66@hotmail.com
                            </span>
                        </div>
                        <div className="userShowInfo">
                            <RoomIcon className="userShowIcon" />
                            <span className="userShowInfoTitle">
                                169 Twila Lane, South Ronaldo, Gambia
                            </span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form action="" className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input
                                    type="text"
                                    placeholder="Evelyn79"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Anna Becker"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input
                                    type="text"
                                    placeholder="Hoyt_Ferry66@hotmail.com"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input
                                    type="text"
                                    placeholder="169 Twila Lane, South Ronaldo, Gambia"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Telephone</label>
                                <input
                                    type="text"
                                    placeholder="+49 1638 92 8397"
                                    className="userUpdateInput"
                                />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img
                                    src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1073.jpg"
                                    alt=""
                                    className="userUpdateImg"
                                />
                                <label htmlFor="file">
                                    <PublishIcon className="userUpdateIcon" />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    style={{ display: "none" }}
                                />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
