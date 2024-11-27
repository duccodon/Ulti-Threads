import Home from "./pages/home";
import Search from "./pages/search";
import CreatePost from "./pages/createPost";
import Activity from "./pages/activity";
import Profile from "./pages/profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/createPost" element={<CreatePost />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
