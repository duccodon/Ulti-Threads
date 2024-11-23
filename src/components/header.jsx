import Button from "./button";
import { useState } from "react";

const Header = () => {
  const [openNavigation, setopenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setopenNavigation(false); //set to default
    } else {
      setopenNavigation(true);
    }
  };

  const closeNavigation = () => {
    if (openNavigation) {
      setopenNavigation(false); //set to default
    }
  };

  return (
    <>
      <nav
        class=" w-full py-[.7rem] fixed top-0 z-10"
        onClick={closeNavigation}
      >
        <div class="w-[95%] mx-auto flex justify-between items-center">
          <h2 class="text-xl font-bold mx-auto md:mx-0">Ulti Threads</h2>
          <div class="hidden md:block">
            <h2 class="text-xl font-bold">Home</h2>
          </div>
          <div class="hidden md:block">
            <Button href="#" className="bg-black text-white">
              Log out
            </Button>
          </div>
          <div class="text-black block py-[.7rem] md:hidden">
            <span
              class="text-xl p-[1.2rem] hover:bg-gray-200 hover:rounded-[1rem] transition-all duration-300 ease-in-out"
              onClick={toggleNavigation}
            >
              <i class="fa-solid fa-grip-lines"></i>
            </span>
            <div
              class={`absolute left-[75%] w-[calc(100vw/5)] p-[0.3rem] top-[90%] md:left-[70%] md:w-[15rem] md:p-[.3rem] right-0 bg-white rounded-[1rem] ${
                openNavigation ? "block" : "hidden"
              }`}
            >
              <div class="hover:bg-gray-200 hover:rounded-[1rem] transition-all duration-300 ease-in-out p-[calc(100vw/45)] m-[.3rem] rounded-[.5rem] cursor-pointer bg-zinc-100">
                Theme
              </div>
              <div class="hover:bg-gray-200 hover:rounded-[1rem] transition-all duration-300 ease-in-out p-[calc(100vw/45)] m-[.3rem] rounded-[.5rem] cursor-pointer bg-zinc-100">
                Detail Information
              </div>
              <div class="hover:bg-gray-200 hover:rounded-[1rem] transition-all duration-300 ease-in-out p-[calc(100vw/45)] m-[.3rem] rounded-[.5rem] cursor-pointer bg-zinc-100">
                Settings
              </div>
              <div class="hover:bg-gray-200 hover:rounded-[1rem] transition-all duration-300 ease-in-out p-[calc(100vw/45)] m-[.3rem] rounded-[.5rem] cursor-pointer bg-zinc-100">
                <a href="../account/login.html">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
