import Button from "./button";

const Contents = () => {
  return (
    <>
      <div className="scrollbar fixed top-[5.4rem] left-1/2 transform translate-x-[-50%] h-[calc(100vh-5*1vh)] w-[38rem] bg-white rounded-[1rem] border border-[#ccc] overflow-y-auto overflow-x-hidden">
        <form
          action="/"
          className="mx-4 my-auto flex items-center justify-between py-[1rem]"
        >
          <img
            src="/public/1.jpg"
            className="min-w-[2.5rem] min-h-[2.5rem] max-w-[2.5rem] max-h-[2.5rem] rounded-[50%] overflow-hidden"
          />
          <input
            type="text"
            placeholder="What's new"
            id="create-post"
            class="justify-self-start w-full pl-4 mr-4 text-[13px] !outline-none"
          />
          <Button
            href="#"
            className="bg-white text-black border border-black border-solid rounded-[.7rem]"
          >
            <input type="submit" value="Post" className="cursor-pointer" />
          </Button>
        </form>

        <div className="feeds">
          <div className="block border-t border-[#ccc] pt-[1rem] px-[1rem]">
            <a href="/front-end/comment_post/comment_post.html">
              <div className="flex justify-between gap-[1rem] text-black">
                <img
                  src="/public/1.jpg"
                  className="min-w-[2.5rem] min-h-[2.5rem] max-w-[2.5rem] max-h-[2.5rem] rounded-[50%] overflow-hidden"
                />
                <div className="flex gap-[1rem]">
                  <div className="flex flex-col gap-[.5rem]">
                    <div className="ingo inline-flex gap-[10px] text-[.8rem]">
                      <h3>Username</h3>
                      <h3 className="text-[#ccc]">1 Hour</h3>
                    </div>

                    <div className="content">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Necessitatibus dignissimos ipsam vero fuga cum autem
                      quibusdam nihil repellat, quis, iure sequi voluptates.
                      Eligendi tenetur placeat ducimus incidunt quidem velit
                      ratione aliquid minima voluptatum, dolores nihil
                      blanditiis omnis debitis ipsa libero? Enim eius ex, ullam
                      illo consequuntur laudantium quas assumenda, unde eaque
                      deserunt asperiores tempore, tenetur eum odit odio. Ex
                      praesentium aliquam assumenda architecto repellendus magni
                      cum, quia ratione fugiat porro quis eos maxime quo
                      accusantium doloribus labore quos itaque, ad vitae at
                      molestias minima? Non, sit velit eos delectus blanditiis
                      odio nulla tempore incidunt perferendis voluptatibus ab
                      praesentium quia veniam?
                    </div>

                    <div className="photo">
                      <img
                        src="/public/oldtrafford_top.jpg"
                        className="w-full max-w-[100%] h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
                <span className="edit">
                  <i className="fa-solid fa-ellipsis"></i>
                </span>
              </div>
            </a>

            <div className="mb-[1rem] pt-[1rem] px-[3.7rem] flex gap-[1.5rem] items-center">
              <span className="actionbutton like-button relative">
                <i className="fa-regular fa-heart"></i>
              </span>
              <span className="actionbutton comment-button relative">
                <i className="fa-regular fa-comment"></i>
              </span>
              <span className="actionbutton retweet-button relative">
                <i className="las la-retweet"></i>
              </span>
              <span className="actionbutton share-button relative">
                <i className="fa-solid fa-share"></i>
              </span>
            </div>
          </div>

          <div className="block border-t border-[#ccc] pt-[1rem] px-[1rem]">
            <a href="/front-end/comment_post/comment_post.html">
              <div className="flex justify-between gap-[1rem] text-black">
                <img
                  src="/public/1.jpg"
                  className="min-w-[2.5rem] min-h-[2.5rem] max-w-[2.5rem] max-h-[2.5rem] rounded-[50%] overflow-hidden"
                />
                <div className="flex gap-[1rem]">
                  <div className="flex flex-col gap-[.5rem]">
                    <div className="ingo inline-flex gap-[10px] text-[.8rem]">
                      <h3>Username</h3>
                      <h3 className="text-[#ccc]">1 Hour</h3>
                    </div>

                    <div className="content">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Necessitatibus dignissimos ipsam vero fuga cum autem
                      quibusdam nihil repellat, quis, iure sequi voluptates.
                      Eligendi tenetur placeat ducimus incidunt quidem velit
                      ratione aliquid minima voluptatum, dolores nihil
                      blanditiis omnis debitis ipsa libero? Enim eius ex, ullam
                      illo consequuntur laudantium quas assumenda, unde eaque
                      deserunt asperiores tempore, tenetur eum odit odio. Ex
                      praesentium aliquam assumenda architecto repellendus magni
                      cum, quia ratione fugiat porro quis eos maxime quo
                      accusantium doloribus labore quos itaque, ad vitae at
                      molestias minima? Non, sit velit eos delectus blanditiis
                      odio nulla tempore incidunt perferendis voluptatibus ab
                      praesentium quia veniam?
                    </div>

                    <div className="photo">
                      <img
                        src="/public/sir.jpg"
                        className="w-full max-w-[100%] h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
                <span className="edit">
                  <i className="fa-solid fa-ellipsis"></i>
                </span>
              </div>
            </a>

            <div className="mb-[1rem] pt-[1rem] px-[3.7rem] flex gap-[1.5rem] items-center">
              <span className="actionbutton like-button relative">
                <i className="fa-regular fa-heart"></i>
              </span>
              <span className="actionbutton comment-button relative">
                <i className="fa-regular fa-comment"></i>
              </span>
              <span className="actionbutton retweet-button relative">
                <i className="las la-retweet"></i>
              </span>
              <span className="actionbutton share-button relative">
                <i className="fa-solid fa-share"></i>
              </span>
            </div>
          </div>


          <div className="block border-t border-[#ccc] pt-[1rem] px-[1rem]">
            <a href="/front-end/comment_post/comment_post.html">
              <div className="flex justify-between gap-[1rem] text-black">
                <img
                  src="/public/1.jpg"
                  className="min-w-[2.5rem] min-h-[2.5rem] max-w-[2.5rem] max-h-[2.5rem] rounded-[50%] overflow-hidden"
                />
                <div className="flex gap-[1rem]">
                  <div className="flex flex-col gap-[.5rem]">
                    <div className="ingo inline-flex gap-[10px] text-[.8rem]">
                      <h3>Username</h3>
                      <h3 className="text-[#ccc]">1 Hour</h3>
                    </div>

                    <div className="content">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Necessitatibus dignissimos ipsam vero fuga cum autem
                      quibusdam nihil repellat, quis, iure sequi voluptates.
                      Eligendi tenetur placeat ducimus incidunt quidem velit
                      ratione aliquid minima voluptatum, dolores nihil
                      blanditiis omnis debitis ipsa libero? Enim eius ex, ullam
                      illo consequuntur laudantium quas assumenda, unde eaque
                      deserunt asperiores tempore, tenetur eum odit odio. Ex
                      praesentium aliquam assumenda architecto repellendus magni
                      cum, quia ratione fugiat porro quis eos maxime quo
                      accusantium doloribus labore quos itaque, ad vitae at
                      molestias minima? Non, sit velit eos delectus blanditiis
                      odio nulla tempore incidunt perferendis voluptatibus ab
                      praesentium quia veniam?
                    </div>

                    <div className="photo">
                      <img
                        src="/public/champion.jpg"
                        className="w-full max-w-[100%] h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
                <span className="edit">
                  <i className="fa-solid fa-ellipsis"></i>
                </span>
              </div>
            </a>

            <div className="mb-[1rem] pt-[1rem] px-[3.7rem] flex gap-[1.5rem] items-center">
              <span className="actionbutton like-button relative">
                <i className="fa-regular fa-heart"></i>
              </span>
              <span className="actionbutton comment-button relative">
                <i className="fa-regular fa-comment"></i>
              </span>
              <span className="actionbutton retweet-button relative">
                <i className="las la-retweet"></i>
              </span>
              <span className="actionbutton share-button relative">
                <i className="fa-solid fa-share"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contents;
