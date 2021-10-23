import React from "react";
import "./widgetSm.css";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img
                        src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166__340.jpg"
                        alt=""
                        className="widgetSmImg"
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Jaime Lebsack</span>
                        <span className="widgetSmUserTitle">
                            Internal Program Engineer
                        </span>
                    </div>
                    <button className="widgetButton">
                        <VisibilityIcon className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img
                        src="https://cdn.pixabay.com/photo/2017/03/05/23/14/girl-2120196__340.jpg"
                        alt=""
                        className="widgetSmImg"
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Jessica Little</span>
                        <span className="widgetSmUserTitle">
                            Senior Metrics Associater
                        </span>
                    </div>
                    <button className="widgetButton">
                        <VisibilityIcon className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img
                        src="https://cdn.pixabay.com/photo/2016/01/18/05/09/woman-1146038__340.jpg"
                        alt=""
                        className="widgetSmImg"
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Dewey Moen</span>
                        <span className="widgetSmUserTitle">
                            Human Factors Associateeer
                        </span>
                    </div>
                    <button className="widgetButton">
                        <VisibilityIcon className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img
                        src="https://cdn.pixabay.com/photo/2016/11/22/10/47/girl-1848947__340.jpg"
                        alt=""
                        className="widgetSmImg"
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Ross Yundt</span>
                        <span className="widgetSmUserTitle">
                            Forward Research Strategister
                        </span>
                    </div>
                    <button className="widgetButton">
                        <VisibilityIcon className="widgetSmIcon" />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    );
}
