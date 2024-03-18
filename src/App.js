import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home.js";
import Layout from "./Layout.js";
import Admin from "./Components/Admin/Admin.js";
import { UserContextProvider } from "./Context/userContext.js";
import DashBoard from "./Components/Admin/DashBoard/DashBoard.js";
import Blog from "./Components/Admin/DashBoard/Blog.js";
function App() {
  return (
    <div>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/adminlogin" element={<Admin />}></Route>
            <Route path={`/admin/:id`} element={<DashBoard/>}></Route>
            <Route path={`/admin/:id/createblog`} element={<Blog/>}></Route>
          </Route>
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
