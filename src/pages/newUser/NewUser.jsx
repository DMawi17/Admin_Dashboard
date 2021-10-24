import React from "react";
import "./newUser.css";

export default function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form action="" className="newUserForm">
                <div className="newUserItem">
                    <label htmlFor="">Full Name</label>
                    <input type="text" placeholder="John Smith" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="John@Smith.com" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="password" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Telephone</label>
                    <input type="text" placeholder="London, England" />
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Gender</label>
                    <div className="newUserGender">
                        <input
                            type="radio"
                            name="gender"
                            id="female"
                            value="female"
                        />
                        <label htmlFor="female">Female</label>
                        <input
                            type="radio"
                            name="gender"
                            id="male"
                            value="male"
                        />
                        <label htmlFor="male">Male</label>
                        <input
                            type="radio"
                            name="gender"
                            id="other"
                            value="other"
                        />
                        <label htmlFor="other">Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <button className="newUserButton">Create</button>
            </form>
        </div>
    );
}
