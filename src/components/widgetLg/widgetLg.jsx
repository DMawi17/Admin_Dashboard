import React from "react";
import "./widgetLg.css";

export default function WidgetLg() {
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
    };
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transaction</h3>
            <table className="widgetLgTable">
                <thead>
                    <tr className="widgetLgTr">
                        <th className="widgetLgTh">Customer</th>
                        <th className="widgetLgTh">Date</th>
                        <th className="widgetLgTh">Amount</th>
                        <th className="widgetLgTh">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img
                                src="https://cdn.pixabay.com/photo/2020/09/11/12/16/black-5562970__340.jpg"
                                alt="face"
                                className="widgetLgImg"
                            />
                            <span className="widgetLgName">Sean Cummings</span>
                        </td>
                        <td className="widgetLgDate">2 Jun 2021</td>
                        <td className="widgetLgAmount">$122.00</td>
                        <td className="widgetLgStatus">
                            <Button type="Approved" />
                        </td>
                    </tr>

                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img
                                src="https://cdn.pixabay.com/photo/2016/09/24/23/34/woman-1692849__340.jpg"
                                alt="face"
                                className="widgetLgImg"
                            />
                            <span className="widgetLgName">Margaret Rau</span>
                        </td>
                        <td className="widgetLgDate">2 Jun 2021</td>
                        <td className="widgetLgAmount">$122.00</td>
                        <td className="widgetLgStatus">
                            <Button type="Declined" />
                        </td>
                    </tr>

                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img
                                src="https://cdn.pixabay.com/photo/2017/06/26/02/47/man-2442565__340.jpg"
                                alt="face"
                                className="widgetLgImg"
                            />
                            <span className="widgetLgName">Ken Pfeffer</span>
                        </td>
                        <td className="widgetLgDate">2 Jun 2021</td>
                        <td className="widgetLgAmount">$122.00</td>
                        <td className="widgetLgStatus">
                            <Button type="Declined" />
                        </td>
                    </tr>

                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img
                                src="https://cdn.pixabay.com/photo/2016/05/23/23/32/human-1411499__340.jpg"
                                alt="face"
                                className="widgetLgImg"
                            />
                            <span className="widgetLgName">Ricardo Casper</span>
                        </td>
                        <td className="widgetLgDate">2 Jun 2021</td>
                        <td className="widgetLgAmount">$122.00</td>
                        <td className="widgetLgStatus">
                            <Button type="Pending" />
                        </td>
                    </tr>

                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img
                                src="https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__480.jpg"
                                alt="face"
                                className="widgetLgImg"
                            />
                            <span className="widgetLgName">
                                Marcella Leffler
                            </span>
                        </td>
                        <td className="widgetLgDate">2 Jun 2021</td>
                        <td className="widgetLgAmount">$122.00</td>
                        <td className="widgetLgStatus">
                            <Button type="Approved" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
