import LibrarySearchForm from "../components/LibrarySearchForm";

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
          <LibrarySearchForm></LibrarySearchForm>
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