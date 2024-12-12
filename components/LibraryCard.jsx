import Image from "next/image";
import Link from "next/link";
import {
    FaBook
} from "react-icons/fa";


const LibraryCard = ( {library}) => {
  console.log(library.images);
    return ( 
          <div className="rounded-xl shadow-md relative">
            <Image
              src={`/images/properties/${library.images[0]}`}
              alt=""
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto rounded-t-xl"
            />
            <div className="p-4">
              <div className="text-left md:text-center lg:text-left mb-6">
                <div className="text-gray-600">{library.created_by}</div>
                <h3 className="text-xl font-bold">{library.name}</h3>
              </div>
              <h3
                className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right"
              >
                <Link href={`https://plus.codes/${library.pluscode}`} className="text-blue-600 visited:text-purple-600 ...">
                    Standort maps
                </Link>
              </h3>

              <div className="flex justify-center gap-4 text-gray-500 mb-4 text-2xl">
                {library.books === undefined ? (
                  <p>No books</p>) : (
                <p> 
                  <span className="md:hidden lg:inline">Available books: {library.books.length}</span>
                </p>
                )}
              </div>
              
              <div
                className="flex justify-center gap-4 text-green-900 text-sm mb-4"
              >

              </div>

              <div className="border border-gray-100 mb-5"></div>

              <div className="flex flex-col lg:flex-row justify-between mb-4">
                <div className="flex align-middle gap-2 mb-4 lg:mb-0">
                  <i
                    className="fa-solid fa-location-dot text-lg text-orange-700"
                  ></i>
                  <span className="text-orange-700"> {library.ort} </span>
                  <span className="text-orange-700"> {library.ort} </span>
                </div>
                <Link
                  href={`/libraries/${library._id}`}
                  className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
     );
}
 
export default LibraryCard;