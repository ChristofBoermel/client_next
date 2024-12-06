const Hero = () => {
    return ( 
        <section className="bg-[#ebe0c7] py-20 mb-4 mt-2">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
        >
          <div className="text-center">
            {/* <h1
              className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
            >
              What are Tiny Libraries?
            </h1> */}

            <h1 className="text-4xl font-extrabold text-[#3b2d0e] sm:text-5xl md:text-6xl mb-14">
            Find a Tiny Library near you!
            </h1>
            {/* <p className="my-4 text-2xl text-white">
            </p> */}

          </div>
          {/* <!-- Form Component --> */}
          <form
            className="mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center"
          >
            <div className="w-full md:w-3/5 md:pr-2 mb-4 md:mb-0">
              <label htmlFor="location" className="sr-only">Location</label>
              <input
                type="text"
                id="location"
                placeholder="Your location"
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="md:ml-4 mt-4 md:mt-0 w-full md:w-auto px-6 py-3 rounded-lg bg-[#867754] text-white hover:bg-[#65593f] focus:outline-none focus:ring focus:ring-blue-500"
            >
              Search
            </button>
          </form>
          <div className="mt-14">
          <p className="text-4xl text-[#3b2d0e]" > Tiny Libraries are</p>
          <p className="my-4 text-base text-[#3b2d0e] text-balance">
            small shelfs in which people can obtain books or discard them if they don't
            need them anymore. It's completly non profit so it's based on people being honest.
            We want to give everyone, who can or can't afford books, the chance to find them in their local area.
            To do that, we started this project to map these individual Tiny Libraries so anyone may find them.
            </p>
          </div>
        </div>
      </section>
    );
}
 
export default Hero;