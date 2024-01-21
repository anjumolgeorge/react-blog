import "./App.css";
import CreateBlog from "./components/CreateBlog";
import Blogs from "./components/Blogs";
import Blog from "./components/Blog";
import { Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";

export const blogContext = createContext();

function App() {
  const [blog, setBlog] = useState([]);
  return (
    <div className="App">
        <blogContext.Provider value={{ blog, setBlog }}>
      <Routes>
          <Route path="/" element={<CreateBlog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<Blog />} />
      </Routes>
        </blogContext.Provider>
    </div>
  );
}

export default App;
