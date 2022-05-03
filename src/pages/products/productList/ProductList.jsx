import { useState } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { productRows } from "../../../data/dummyData.json";
import "./productList.css";

export default function ProductList() {
    const [product, setProduct] = useState(productRows);

    const handleDelete = (id) => {
        setProduct(product.filter((item) => item.id !== id));
    };

    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        {
            field: "product",
            headerName: "Product",
            width: 180,
            editable: true,
            renderCell: (params) => {
                return (
                    <div className="productListUser">
                        <img
                            className="productListImg"
                            src={params.row.img}
                            alt=""
                        />
                        {params.row.name}
                    </div>
                );
            },
        },
        {
            field: "stock",
            headerName: "Stock",
            width: 250,
            editable: true,
        },
        {
            field: "status",
            headerName: "Status",
            editable: true,
        },
        {
            field: "price",
            headerName: "Price",
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 160,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/" + params.row.id}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteIcon
                            className="productListDel"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
        {
            field: "transaction",
            headerName: "Transaction Volume",
            width: 160,
        },
    ];

    return (
        <div className="productList">
            {" "}
            <DataGrid
                rows={productRows}
                disableSelectionOnClick
                columns={columns}
                pageSize={7}
                rowsPerPageOptions={[7]}
                checkboxSelection
            />
        </div>
    );
}
