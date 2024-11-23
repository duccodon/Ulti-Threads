import Header from "./components/header";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <>
      <div className="bg-zinc-100">
        <Header />
        <main className="fixed top-[5.4rem]">
          <div className="grid grid-cols-[6rem_auto_6rem] gap-x-[2rem]">
            <Sidebar />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
