import "./App.css";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/pages/Home";

function App() {
    return (
        <div className="App">
            <Topbar />
            <div className="container">
                <Sidebar />
                <Home />
            </div>
        </div>
    );
}

export default App;
