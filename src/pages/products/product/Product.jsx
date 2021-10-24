import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../../components/chart/Chart";
import { productData } from "../../../data/dummyData.json";
import { Publish } from "@mui/icons-material";

export default function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newProduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart
                        data={productData}
                        dataKey="Sales"
                        title="Sales Performance"
                    />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img
                            src="https://cdn.pixabay.com/photo/2017/07/31/21/59/apple-2561475__340.jpg"
                            alt=""
                            className="productInfoImg"
                        />
                        <span className="productName">Apple Watch</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales:</span>
                            <span className="productInfoValue">5123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active:</span>
                            <span className="productInfoValue">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock:</span>
                            <span className="productInfoValue">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder="Apple AirPod" />
                        <label>In Stock</label>
                        <select name="inStock" id="inSock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFromRight">
                        <div className="productUpload">
                            <img
                                src="https://cdn.pixabay.com/photo/2015/09/05/07/39/apple-923955__480.jpg"
                                alt=""
                                className="productUploadImg"
                            />
                            <label htmlFor="file">
                                <Publish />
                            </label>
                            <input
                                type="file"
                                id="file"
                                style={{ display: "none" }}
                            />
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
