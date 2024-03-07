import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home.js";
import Layout from './Layout.js'

function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}></Route>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
