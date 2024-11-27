import Header from "./components/header";
import Sidebar from "./components/sidebar";
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
        <div className="bg-zinc-100">
          <Header />
          <main className="fixed top-[5.4rem]">
            <div className="md:grid md:grid-cols-[6rem_auto_6rem] md:gap-x-[2rem] flex flex-col items-center">
              <Sidebar />
                <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/search" element={<Search />} />
                  <Route path="/createPost" element={<CreatePost />} />
                  <Route path="/activity" element={<Activity />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
            </div>
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
