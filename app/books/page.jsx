import connectDB from "@/config/database";
import Library from "@/models/library";


const BookPage = async() => {
    await connectDB();
    const libraries = await Library.find({});
    console.log(libraries.map((book) => book.books[0]));
    return ( 
        <main>
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Title</th>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Author</th>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">publisher</th>
                      <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">isbn</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {libraries.map((book) => (
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800" key={book._id}>{book.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800" key={book.author}>{book.author}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800" key={book.publisher}>{book.publisher}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800" key={book.isbn}>{book.isbn}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">Delete</button>
                      </td>
                    </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        </main>
       
    );
}
 
export default BookPage;