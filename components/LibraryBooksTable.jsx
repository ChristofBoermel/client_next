import { Table } from "lucide-react";

const LibraryBooksTable = ({library}) => {

  const columns = [
    { Header: 'Supplier', accessor: 'supplier' },
    { Header: 'Order Count', accessor: 'order_count' },
  ];

    return ( 
      <main>
        <table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {data.map(library => (
      <tr key={library.id}>
        <td>{library.id}</td>
        <td>{library.name}</td>
        <td>Edit | Delete</td>
      </tr>
    ))}
  </tbody>
</table>
      </main>
     );
}
 
export default LibraryBooksTable;