import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Contents from "./components/contents";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="bg-zinc-100">
          <Header />
          <main className="fixed top-[5.4rem]">
            <div className="md:grid md:grid-cols-[6rem_auto_6rem] md:gap-x-[2rem] flex flex-col items-center">
              <Sidebar />
              <Contents />
            </div>
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
