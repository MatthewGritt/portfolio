import Link from "next/link";

function Projects() {
  return (
    <div className="hover:scale-100">
      {/* project flex */}
      <div className="md:flex items-center text-lg sm:text-xl ">
        <div className="  font-bold sm:mr-3 w-full mt-10 cursor-pointer">
          <a href="https://matthewgritt.github.io/ebay-clone/" target="_blank">
            <img
              className=" object-contain"
              src="/images/ebay-basket.png"
              alt="ebay pic"
            />

            <p className="py-1 text-center bg-gray-100">
              Ebay shopping cart in react
            </p>
          </a>
        </div>
        {/*  */}
        <div className="font-bold sm:ml-3 w-full mt-10">
          <a href="https://matthewgritt.github.io/weather/" target="_blank">
            <img
              className="object-contain"
              src="/images/weather.png"
              alt="weather pic"
            />
            <p className="py-1 text-center bg-gray-100">Weather app</p>
          </a>
        </div>
      </div>
      {/* project flex */}
      <div className="md:flex items-center text-lg sm:text-xl">
        <div className="mt-10 font-bold sm:mr-3">
          <a
            href="https://matthewgritt.github.io/facebook-clone/"
            target="_blank"
          >
            <img
              className=" object-contain"
              src="/images/facebook-clone.png"
              alt="facebook pic"
            />
            <p className="py-1 text-center bg-gray-100">
              Facebook clone in react
            </p>
          </a>
        </div>
        {/*  */}
        <div className="mt-10 font-bold sm:ml-3">
          <a href="https://matthewgritt.github.io/pairs/" target="_blank">
            <img
              className=" object-contain"
              src="/images/pairs.png"
              alt="pairs pic"
            />
            <p className="py-1 text-center bg-gray-100">Pairs card game</p>
          </a>
        </div>
      </div>
      {/* project */}
    </div>
  );
}

export default Projects;
