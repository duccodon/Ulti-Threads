const Sidebar = () => {
  return (
    <>
      <div className="ml-[0.5rem] h-full z-10">
        {/* sidebar */}
        <div className="flex flex-col items-center justify-between h-[calc(100vh-5.4rem)] bottom-[-calc(100vh/5)] cursor-pointer transition-all duration-300 ease-in-out fixed">
          {/* group */}
          <div className="flex flex-col items-center justify-center">
            <a href="#" className="relative p-[1.2rem] text-black text-[1.3rem]">
              <span>
                <i class="fa-solid fa-house"></i>
              </span>
            </a>
            <a
              href="./search/search.html"
              className="flex flex-col items-center justify-center"
            >
              <span>
                <i class="fa-solid fa-magnifying-glass"></i>
              </span>
            </a>

            <a href="#" className="flex flex-col items-center justify-center">
              <span>
                <i class="fa-solid fa-plus"></i>
              </span>
            </a>

            <a
              href="./activity/activity.html"
              className="flex flex-col items-center justify-center"
              id="notification"
            >
              <span>
                <i class="fa-regular fa-heart">
                  <small class="notification-count">10</small>
                </i>
              </span>
            </a>

            <a href="./profile/profile.html" class="menu-item">
              <span>
                <i class="fa-regular fa-user"></i>
              </span>
            </a>
          </div>
          {/* popup */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
