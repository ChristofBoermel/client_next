import addBook from 'app/actions/addBook.js';

const LibraryAddForm = () => {
    return ( 
        <form action={addBook} >
            <h2 className="text-3xl text-center font-semibold mb-6">
              Add Library
            </h2>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Name</label
              >
              <input
                type="text"
                id="name"
                name="name"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Die Verwandlung"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Creator</label
              >
              <input
                type="text"
                id="created_by"
                name="created_by"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Franz Kafka"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Pluscode</label
              >
              <input
                type="text"
                id="pluscode"
                name="pluscode"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. C.H.Beck"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Stadt</label
              >
              <input
                type="text"
                id="ort"
                name="ort"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. 2010"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="images" className="block text-gray-700 font-bold mb-2"
                >Images (Select up to 4 images)</label
              >
              <input
                type="file"
                id="images"
                name="images"
                className="border rounded w-full py-2 px-3"
                accept="image/*"
                required
              />
            </div>

            <div>
              <button
                className="bg-[#867754] hover:bg-[#65593f] text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Book
              </button>
            </div>
          </form>
     );
}
 
export default LibraryAddForm;