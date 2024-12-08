import Button from "./button";

const SearchContents = () => {
  return (
    <>
      <div className="scrollbar fixed top-[5.4rem] left-1/2 transform translate-x-[-50%] h-[calc(100vh-5*1vh-2rem)] w-[100%] md:w-[38rem] bg-white rounded-[1rem] border border-[#ccc] overflow-y-auto overflow-x-hidden">
        <form
          action="/"
          className="mx-4 my-auto items-center justify-between py-[1rem] md:flex hidden"
        >
          <div className="inline-flex mx-auto bg-[#FAFAFA] rounded-[20px] p-4 w-[95%]">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
              type="search"
              placeholder="Searching"
              id="create-post"
              class="bg-[#FAFAFA] justify-self-start w-full pl-4 mr-4 text-[13px] !outline-none"
            />
          </div>
        </form>

        <div className="feeds">
          <div className="px-[1.2rem] py-[.5rem] text-[14px]">
            Recommendation
          </div>

          <div className="block pt-[1rem] px-[1rem]">
            <a href="/front-end/comment_post/comment_post.html">
              <div className="flex justify-between gap-[1rem] text-black">
                <img
                  src="/public/1.jpg"
                  className="min-w-[2.5rem] min-h-[2.5rem] max-w-[2.5rem] max-h-[2.5rem] rounded-[50%] overflow-hidden"
                />
                <div className="flex justify-between min-w-[90%] pb-[1rem] border-b border-[#ccc]">
                  <div className="flex flex-col gap-[.5rem]">
                    <div className="ingo flex flex-col gap-[10px] text-[.8rem]">
                      <h3>Username</h3>
                      <h3 className="text-[#ccc]">Anh Da Den</h3>
                      <div>100k followers</div>
                    </div>
                  </div>
                  <Button
                    href="#"
                    className="bg-white text-black py-[1.2rem] flex items-center h-[2rem] border border-black border-solid rounded-[.7rem]"
                  >
                    Follow
                  </Button>
                </div>
              </div>
            </a>
          </div>

          
          <div className="block pt-[1rem] px-[1rem]">
            <a href="/front-end/comment_post/comment_post.html">
              <div className="flex justify-between gap-[1rem] text-black">
                <img
                  src="/public/1.jpg"
                  className="min-w-[2.5rem] min-h-[2.5rem] max-w-[2.5rem] max-h-[2.5rem] rounded-[50%] overflow-hidden"
                />
                <div className="flex justify-between min-w-[90%] pb-[1rem] border-b border-[#ccc]">
                  <div className="flex flex-col gap-[.5rem]">
                    <div className="ingo flex flex-col gap-[10px] text-[.8rem]">
                      <h3>Username</h3>
                      <h3 className="text-[#ccc]">Anh Da Den</h3>
                      <div>100k followers</div>
                    </div>
                  </div>
                  <Button
                    href="#"
                    className="bg-white text-black py-[1.2rem] flex items-center h-[2rem] border border-black border-solid rounded-[.7rem]"
                  >
                    Follow
                  </Button>
                </div>
              </div>
            </a>
          </div>


          <div className="block pt-[1rem] px-[1rem]">
            <a href="/front-end/comment_post/comment_post.html">
              <div className="flex justify-between gap-[1rem] text-black">
                <img
                  src="/public/1.jpg"
                  className="min-w-[2.5rem] min-h-[2.5rem] max-w-[2.5rem] max-h-[2.5rem] rounded-[50%] overflow-hidden"
                />
                <div className="flex justify-between min-w-[90%] pb-[1rem] border-b border-[#ccc]">
                  <div className="flex flex-col gap-[.5rem]">
                    <div className="ingo flex flex-col gap-[10px] text-[.8rem]">
                      <h3>Username</h3>
                      <h3 className="text-[#ccc]">Anh Da Den</h3>
                      <div>100k followers</div>
                    </div>
                  </div>
                  <Button
                    href="#"
                    className="bg-white text-black py-[1.2rem] flex items-center h-[2rem] border border-black border-solid rounded-[.7rem]"
                  >
                    Follow
                  </Button>
                </div>
              </div>
            </a>
          </div>


          <div className="block pt-[1rem] px-[1rem]">
            <a href="/front-end/comment_post/comment_post.html">
              <div className="flex justify-between gap-[1rem] text-black">
                <img
                  src="/public/1.jpg"
                  className="min-w-[2.5rem] min-h-[2.5rem] max-w-[2.5rem] max-h-[2.5rem] rounded-[50%] overflow-hidden"
                />
                <div className="flex justify-between min-w-[90%] pb-[1rem] border-b border-[#ccc]">
                  <div className="flex flex-col gap-[.5rem]">
                    <div className="ingo flex flex-col gap-[10px] text-[.8rem]">
                      <h3>Username</h3>
                      <h3 className="text-[#ccc]">Anh Da Den</h3>
                      <div>100k followers</div>
                    </div>
                  </div>
                  <Button
                    href="#"
                    className="bg-white text-black py-[1.2rem] flex items-center h-[2rem] border border-black border-solid rounded-[.7rem]"
                  >
                    Follow
                  </Button>
                </div>
              </div>
            </a>
          </div>


          <div className="block pt-[1rem] px-[1rem]">
            <a href="/front-end/comment_post/comment_post.html">
              <div className="flex justify-between gap-[1rem] text-black">
                <img
                  src="/public/1.jpg"
                  className="min-w-[2.5rem] min-h-[2.5rem] max-w-[2.5rem] max-h-[2.5rem] rounded-[50%] overflow-hidden"
                />
                <div className="flex justify-between min-w-[90%] pb-[1rem] border-b border-[#ccc]">
                  <div className="flex flex-col gap-[.5rem]">
                    <div className="ingo flex flex-col gap-[10px] text-[.8rem]">
                      <h3>Username</h3>
                      <h3 className="text-[#ccc]">Anh Da Den</h3>
                      <div>100k followers</div>
                    </div>
                  </div>
                  <Button
                    href="#"
                    className="bg-white text-black py-[1.2rem] flex items-center h-[2rem] border border-black border-solid rounded-[.7rem]"
                  >
                    Follow
                  </Button>
                </div>
              </div>
            </a>
          </div>


          <div className="block pt-[1rem] px-[1rem]">
            <a href="/front-end/comment_post/comment_post.html">
              <div className="flex justify-between gap-[1rem] text-black">
                <img
                  src="/public/1.jpg"
                  className="min-w-[2.5rem] min-h-[2.5rem] max-w-[2.5rem] max-h-[2.5rem] rounded-[50%] overflow-hidden"
                />
                <div className="flex justify-between min-w-[90%] pb-[1rem] border-b border-[#ccc]">
                  <div className="flex flex-col gap-[.5rem]">
                    <div className="ingo flex flex-col gap-[10px] text-[.8rem]">
                      <h3>Username</h3>
                      <h3 className="text-[#ccc]">Anh Da Den</h3>
                      <div>100k followers</div>
                    </div>
                  </div>
                  <Button
                    href="#"
                    className="bg-white text-black py-[1.2rem] flex items-center h-[2rem] border border-black border-solid rounded-[.7rem]"
                  >
                    Follow
                  </Button>
                </div>
              </div>
            </a>
          </div>


          <div className="block pt-[1rem] px-[1rem]">
            <a href="/front-end/comment_post/comment_post.html">
              <div className="flex justify-between gap-[1rem] text-black">
                <img
                  src="/public/1.jpg"
                  className="min-w-[2.5rem] min-h-[2.5rem] max-w-[2.5rem] max-h-[2.5rem] rounded-[50%] overflow-hidden"
                />
                <div className="flex justify-between min-w-[90%] pb-[1rem] border-b border-[#ccc]">
                  <div className="flex flex-col gap-[.5rem]">
                    <div className="ingo flex flex-col gap-[10px] text-[.8rem]">
                      <h3>Username</h3>
                      <h3 className="text-[#ccc]">Anh Da Den</h3>
                      <div>100k followers</div>
                    </div>
                  </div>
                  <Button
                    href="#"
                    className="bg-white text-black py-[1.2rem] flex items-center h-[2rem] border border-black border-solid rounded-[.7rem]"
                  >
                    Follow
                  </Button>
                </div>
              </div>
            </a>
          </div>


          <div className="block pt-[1rem] px-[1rem]">
            <a href="/front-end/comment_post/comment_post.html">
              <div className="flex justify-between gap-[1rem] text-black">
                <img
                  src="/public/1.jpg"
                  className="min-w-[2.5rem] min-h-[2.5rem] max-w-[2.5rem] max-h-[2.5rem] rounded-[50%] overflow-hidden"
                />
                <div className="flex justify-between min-w-[90%] pb-[1rem] border-b border-[#ccc]">
                  <div className="flex flex-col gap-[.5rem]">
                    <div className="ingo flex flex-col gap-[10px] text-[.8rem]">
                      <h3>Username</h3>
                      <h3 className="text-[#ccc]">Anh Da Den</h3>
                      <div>100k followers</div>
                    </div>
                  </div>
                  <Button
                    href="#"
                    className="bg-white text-black py-[1.2rem] flex items-center h-[2rem] border border-black border-solid rounded-[.7rem]"
                  >
                    Follow
                  </Button>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchContents;
