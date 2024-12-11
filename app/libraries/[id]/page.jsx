import connectDB from '../../../config/database';
import Library from '../../../models/library';
import LibraryHeaderImage from '../../../components/LibraryHeaderImage';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import LibraryDetails from '../../../components/LibraryDetails';

const LibraryPage = async({params}) => {
    await connectDB();
    const { id } = await params;
    const library = await Library.findById(id);

    return (
        <>
        <LibraryHeaderImage image={library.images[0]}></LibraryHeaderImage>
        <section>
      <div className="container m-auto py-6 px-6">
        <Link
          href="/libraries"
          className="text-blue-500 hover:text-blue-600 flex items-center"
        >
          <FaArrowLeft className='mr-2'></FaArrowLeft> Back to Libraries
        </Link>
      </div>
    </section>
    <section className="bg-blue-50">
        <div className="container m-auto py-10 px-6">
            <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <LibraryDetails library={library}></LibraryDetails>
            </div>
        </div>
    </section>
        </>);
}
 
export default LibraryPage;