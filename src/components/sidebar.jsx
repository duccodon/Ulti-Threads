import { useState } from "react";

const Sidebar = () => {
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
      {/* left */}
      <div className="ml-[0.5rem] h-full z-10" onClick={closeNavigation}>
        {/* sidebar */}
        <div className="flex flex-col items-center justify-between h-[calc(100vh-5*1vh-(100vh/5))] bottom-[1vh] cursor-pointer transition-all duration-300 ease-in-out fixed">
          {/* group */}
          <div className="flex flex-col items-center justify-center">
            <a
              href="#"
              className="relative p-[1.2rem] text-black hover:bg-gray-200 hover:rounded-[1rem] transition-all duration-300 ease-in-out"
            >
              <span className="text-[1.3rem]">
                <i class="fa-solid fa-house"></i>
              </span>
            </a>
            <a
              href="#"
              className="relative p-[1.2rem] text-black hover:bg-gray-200 hover:rounded-[1rem] transition-all duration-300 ease-in-out"
            >
              <span className="text-[1.3rem]">
                <i class="fa-solid fa-magnifying-glass"></i>
              </span>
            </a>

            <a
              href="#"
              className="relative p-[1.2rem] text-black hover:bg-gray-200 hover:rounded-[1rem] transition-all duration-300 ease-in-out"
            >
              <span className="text-[1.3rem]">
                <i class="fa-solid fa-plus"></i>
              </span>
            </a>

            <a
              href="#"
              className="relative p-[1.2rem] text-black hover:bg-gray-200 hover:rounded-[1rem] transition-all duration-300 ease-in-out"
              id="notification"
            >
              <span className="text-[1.3rem]">
                <i class="fa-regular fa-heart">
                  <small className="bg-red-500 text-white text-[0.7rem] w-fit rounded-[0.8rem] p-[0.1rem_0.4rem] absolute left-[2rem]">10</small>
                </i>
              </span>
            </a>

            <a
              href="#"
              className="relative p-[1.2rem] text-black hover:bg-gray-200 hover:rounded-[1rem] transition-all duration-300 ease-in-out"
            >
              <span className="text-[1.3rem]">
                <i class="fa-regular fa-user"></i>
              </span>
            </a>
          </div>
          {/* popup */}
          <div
            onClick={toggleNavigation}
            class="relative p-[1.2rem] text-black hover:bg-gray-200 hover:rounded-[1rem] transition-all duration-300 ease-in-out"
          >
            <span>
              <i class="fa-solid fa-grip-lines text-lg"></i>
            </span>
            <div
              id="sidebar-functionPopup"
              class={`absolute left-[120%] bottom-[40%] w-[15rem] bg-white rounded-lg p-2 ${
                openNavigation ? "block" : "hidden"
              }`}
            >
              <div class="hover:bg-gray-200 hover:rounded-[1rem] transition-all duration-300 ease-in-out p-[1rem] m-[.3rem] rounded-[.5rem] cursor-pointer bg-zinc-100">
                Theme
              </div>
              <div class="hover:bg-gray-200 hover:rounded-[1rem] transition-all duration-300 ease-in-out p-[1rem] m-[.3rem] rounded-[.5rem] cursor-pointer bg-zinc-100">
                Detail Information
              </div>
              <div class="hover:bg-gray-200 hover:rounded-[1rem] transition-all duration-300 ease-in-out p-[1rem] m-[.3rem] rounded-[.5rem] cursor-pointer bg-zinc-100">
                Settings
              </div>
              <div class="hover:bg-gray-200 hover:rounded-[1rem] transition-all duration-300 ease-in-out p-[1rem] m-[.3rem] rounded-[.5rem] cursor-pointer bg-zinc-100">
                <a href="../account/login.html">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
