import { useState } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { userRows } from "../../data/dummyData.json";
import "./userList.css";

export default function UserList() {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: "id", headerName: "ID", width: 70 },
        {
            field: "user",
            headerName: "User",
            width: 180,
            editable: true,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img
                            className="userListImg"
                            src={params.row.avatar}
                            alt=""
                        />
                        {params.row.username}
                    </div>
                );
            },
        },
        {
            field: "email",
            headerName: "Email",
            width: 250,
            editable: true,
        },
        {
            field: "status",
            headerName: "Status",
            editable: true,
        },
        {
            field: "transaction",
            headerName: "Transaction Volume",
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 160,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteIcon
                            className="userListDel"
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
        <div className="userList">
            <DataGrid
                rows={userRows}
                disableSelectionOnClick
                columns={columns}
                pageSize={7}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}
