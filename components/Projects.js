function Projects() {
  return (
    <div className="hover:scale-100">
      {/* project flex */}
      <div className="md:flex items-center text-lg sm:text-xl ">
        {/* ebay */}
        <div className="  font-bold sm:mr-3 w-full mt-10">
          <img
            className=" object-contain"
            src="/images/ebay-basket.png"
            alt="ebay pic"
          />
          <p className="py-1 text-center bg-gray-100">
            Ebay shopping cart in react
          </p>
          <div className="flex items-center justify-evenly mt-2 ">
            <a
              href="https://ebay-clone.vercel.app/"
              target="_blank"
              className="projectBtn"
            >
              See Live
            </a>
            <a
              href="https://github.com/MatthewGritt/ebay-clone"
              target="_blank"
              className="projectBtn"
            >
              Source Code
            </a>
          </div>
        </div>
        {/* weather  */}
        <div className="font-bold sm:ml-3 w-full mt-10">
          <img
            className="object-contain"
            src="/images/weather.png"
            alt="weather pic"
          />
          <p className="py-1 text-center bg-gray-100">Weather app</p>
          <div className="flex items-center justify-evenly mt-2 ">
            <a
              href="https://matthewgritt.github.io/weather/"
              target="_blank"
              className="projectBtn"
            >
              See Live
            </a>
            <a
              href="https://github.com/MatthewGritt/weather"
              target="_blank"
              className="projectBtn"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
      {/* project flex */}
      <div className="md:flex items-center text-lg sm:text-xl">
        {/* todo list */}
        <div className="mt-10 font-bold sm:mr-3">
          <img
            className=" object-contain"
            src="/images/todo.png"
            alt="facebook pic"
          />
          <p className="py-1 text-center bg-gray-100">Todo list</p>
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
        <div className="mt-10 font-bold sm:ml-3">
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
    </div>
  );
}

export default Projects;
