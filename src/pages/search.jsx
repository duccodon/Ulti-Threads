import SearchContents from "../components/searchContent";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

const Search = () => {
    return (
      <>
        <div className="bg-zinc-100">
          <Header headerName="Search"/>
          <main className="fixed top-[5.4rem]">
            <div className="md:grid md:grid-cols-[6rem_auto_6rem] md:gap-x-[2rem] flex flex-col items-center">
              <Sidebar />
              <SearchContents/>
            </div>
          </main>
        </div>
      </>
    );
  };
  
  export default Search;
  