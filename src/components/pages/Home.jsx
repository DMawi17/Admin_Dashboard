import React from "react";
import "./home.css";
import FeaturedInfo from "../featuredinfo/FeaturedInfo";
import Chart from "../chart/Chart";
import { userData } from "../data/dummyData.json";
import WidgetSm from "../widgetSm/widgetSm";
import WidgetLg from "../widgetLg/widgetLg";

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart
                data={userData}
                title="User Analytics"
                grid
                dataKey="Active User"
            />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    );
}
