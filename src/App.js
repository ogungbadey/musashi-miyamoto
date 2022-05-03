import "./App.css";
import LeftBar from "./components/LeftBar/LeftBar";
import TopBar from "./components/TopBar/TopBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Search from "./Pages/Search";

function App() {
  const theme = useContext(ThemeContext);

  return (
    <div className="App">
      <div
        className="Sidebar"
        style={{
          backgroundColor: !theme.state.darkMode ? "white" : "black",
        }}
      >
        <LeftBar />
      </div>
      <div
        className="Main"
        style={{
          backgroundColor: !theme.state.darkMode ? "#fff" : "rgb(15, 15, 12)",
        }}
      >
        <TopBar />
        <div className="Content">
          <Routes>
            <Route path="/home" element={<Home />} />
            {/* <CreatePost /> */}
            {/* <Post /> */}
            {/* <div>Home</div> */}

            <Route path="/search" element={<Search/>} />
          </Routes>
        </div>
      </div>
      <div
        className="Sidebar"
        style={{
          backgroundColor: !theme.state.darkMode ? "white" : "black",
        }}
      >
        Sidebar 2
      </div>
    </div>
  );
}

export default App;
