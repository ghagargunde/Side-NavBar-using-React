import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Polygon from "./pages/Polygon";
import FileManager from "./pages/FileManager";
import Analytics from "./pages/Analytics";
import Image from "./pages/Image";

import Saved from "./pages/Saved";
import Setting from "./pages/Setting";
import Circle from "./pages/Circle";
import Rectangle from "./pages/Rectangle";
import Download from "./pages/Download";
function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/addimg" element={<Image />} />
          <Route path="/polygon" element={<Polygon />} />
          <Route path="/rectangle" element={<Rectangle />} />
          <Route path="/circle" element={<Circle />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/download" element={<Download />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/settings" element={<Setting />} />

          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
