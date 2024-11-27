import Contents from "../components/contents";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

const Profile = () => {
    return (
      <>
        <div className="bg-zinc-100">
          <Header headerName="Profile"/>
          <main className="fixed top-[5.4rem]">
            <div className="md:grid md:grid-cols-[6rem_auto_6rem] md:gap-x-[2rem] flex flex-col items-center">
              <Sidebar />
              <Contents />
            </div>
          </main>
        </div>
      </>
    );
  };
  
  export default Profile;
  