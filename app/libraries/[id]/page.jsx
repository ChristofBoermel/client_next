import connectDB from '../../../config/database';
import Library from '../../../models/library';

const LibraryPage = async({params}) => {
    await connectDB();
    const { id } = await params;
    const library = await Library.findById(id);

    return ( 
    <div>{library.name}</div> 
);
}
 
export default LibraryPage;