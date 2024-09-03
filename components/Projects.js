function Projects() {
  return (
    <div className="hover:scale-100">
      {/* project flex 1 */}
      <div className="md:flex items-center text-lg sm:text-xl ">
        {/* hangman */}
        <div className="  font-bold sm:mr-3 w-full mt-10 border-2">
          <img
            className=" object-contain"
            src="/images/hangman.png"
            alt="ebay pic"
          />
          <p className="py-1 text-center bg-gray-100">Hangman in react</p>
          <div className="flex items-center justify-evenly mt-2 ">
            <a
              href="https://matthewgritt.github.io/hangman/"
              target="_blank"
              className="projectBtn"
            >
              See Live
            </a>
            <a
              href="https://github.com/MatthewGritt/hangman"
              target="_blank"
              className="projectBtn"
            >
              Source Code
            </a>
          </div>
        </div>
        {/* inventory app  */}
        <div className="font-bold sm:ml-3 w-full mt-10 border-2">
          <img
            className="object-contain"
            src="/images/inventory.png"
            alt="weather pic"
          />
          <p className="py-1 text-center bg-gray-100">
            MERN inventory managment web app
          </p>
          <div className="flex items-center justify-evenly mt-2 ">
            <a
              href=""
              target="_blank"
              className="projectBtn"
            >
              See Live
            </a>
            <a
              href="https://github.com/MatthewGritt/Inventory-management-backend"
              target="_blank"
              className="projectBtn"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
      {/* project flex 2*/}
      <div className="md:flex items-center text-lg sm:text-xl">
        {/* todo list */}
        <div className="mt-10 font-bold sm:mr-3 border-2">
          <img
            className=" object-contain"
            src="/images/todo.png"
            alt="facebook pic"
          />
          <p className="py-1 text-center bg-gray-100">
            React todo List using redux
          </p>
          <div className="flex items-center justify-evenly mt-2 ">
            <a
              href="https://matthewgritt.github.io/todo-list/"
              target="_blank"
              className="projectBtn"
            >
              See Live
            </a>
            <a
              href="https://github.com/MatthewGritt/todo-list"
              target="_blank"
              className="projectBtn"
            >
              Source Code
            </a>
          </div>
        </div>
        {/* pairs */}
        <div className="mt-10 font-bold sm:ml-3 border-2">
          <img
            className=" object-contain"
            src="/images/pairs.png"
            alt="pairs pic"
          />
          <p className="py-1 text-center bg-gray-100">Pairs card game</p>
          <div className="flex items-center justify-evenly mt-2 ">
            <a
              href="https://matthewgritt.github.io/pairs/"
              target="_blank"
              className="projectBtn"
            >
              See Live
            </a>
            <a
              href="https://github.com/MatthewGritt/pairs"
              target="_blank"
              className="projectBtn"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
      {/* project flex 3*/}
      <div className="md:flex items-center text-lg sm:text-xl">
        {/* todo list */}
        <div className="mt-10 font-bold sm:mr-3 border-2">
          <img
            className=" object-contain"
            src="/images/twitter.png"
            alt="facebook pic"
          />
          <p className="py-1 text-center bg-gray-100">Twitter clone in react</p>
          <div className="flex items-center justify-evenly mt-2 ">
            <a
              href="https://twitter-clone-weld-seven.vercel.app/"
              target="_blank"
              className="projectBtn"
            >
              See Live
            </a>
            <a
              href="https://github.com/MatthewGritt/twitter-clone"
              target="_blank"
              className="projectBtn"
            >
              Source Code
            </a>
          </div>
        </div>
        {/* pairs */}
        <div className="mt-10 font-bold sm:ml-3 border-2">
          <img
            className=" object-contain"
            src="/images/carousel.png"
            alt="pairs pic"
          />
          <p className="py-1 text-center bg-gray-100">Carousel</p>
          <div className="flex items-center justify-evenly mt-2 ">
            <a
              href="https://matthewgritt.github.io/carousel/"
              target="_blank"
              className="projectBtn"
            >
              See Live
            </a>
            <a
              href="https://github.com/MatthewGritt/carousel"
              target="_blank"
              className="projectBtn"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
