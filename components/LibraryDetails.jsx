const LibraryDetails = ({library}) => {

    return ( 
  <main>
    {library.books === undefined ? (
      <p>No books</p>) : (
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
            {library.books.map((book) => (
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800" key={book.title}>{book.title}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800" key={book.author}>{book.author}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800" key={book.publisher}>{book.publisher}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800" key={book.isbn}>{book.isbn}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    )}
</main>
     );
}
 
export default LibraryDetails;