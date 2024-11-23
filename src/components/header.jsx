import Button from "./button";

const Header = () => {
  return (
    <>
      <nav class="bg-zinc-100 w-full py-2.5 fixed top-0 z-10">
        <div class="w-[95%] mx-auto flex items-center justify-between">
          <h2 class="text-xl font-bold">Ulti Threads</h2>
          <div class="hidden md:block">
            <h2 class="text-xl font-bold">Home</h2>
          </div>
          <div class="hidden md:block">
            <Button
              href = "#"
              className="bg-black text-white"
            >
              Log out
            </Button>
          </div>
          <div class="text-black hidden md:relative md:p-[1.2rem]">
            <span class="text-xl">
              <i class="fa-solid fa-grip-lines"></i>
            </span>
            <div class="absolute top-10 right-0 bg-white shadow-md rounded-md w-40 p-2 hidden">
              <div class="hover:bg-gray-200 rounded-md p-2 cursor-pointer">
                Theme
              </div>
              <div class="hover:bg-gray-200 rounded-md p-2 cursor-pointer">
                Detail Information
              </div>
              <div class="hover:bg-gray-200 rounded-md p-2 cursor-pointer">
                Settings
              </div>
              <div class="hover:bg-gray-200 rounded-md p-2 cursor-pointer">
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
