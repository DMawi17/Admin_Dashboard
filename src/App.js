import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/products/productList/ProductList";
import Product from "./pages/products/product/Product";
import NewProduct from "./pages/products/newProduct/NewProduct";

function App() {
	return (
		<Router>
			<div className="App">
				<Topbar />
				<div className="container">
					<Sidebar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/users">
							<UserList />
						</Route>
						<Route path="/user/:userId">
							<User />
						</Route>
						<Route path="/newUser/">
							<NewUser />
						</Route>
						<Route path="/products/">
							<ProductList />
						</Route>
						<Route path="/product/:productId/">
							<Product />
						</Route>
						<Route path="/newProduct/">
							<NewProduct />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
