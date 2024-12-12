import LibraryCard from '../../components/LibraryCard';
import connectDB from '@/config/database';
import Library from '@/models/library';
import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';

const LibrariesPage = async() => {
    await connectDB();
    const libraries = await Library.find({});

    function omitUndefined(val) {
        const keys = Object.keys(val);
        for (let i = 0, len = keys.length; i < len; ++i) {
          (val[keys[i]] === void 0) && delete val[keys[i]];
        }
      }
    console.log(libraries);

    return ( 
        <section className='px-4 py-6'>
      <div className="container m-auto py-6 px-6">
        <Link
          href={`/libraries/addLibraries`}
          className="text-blue-500 hover:text-blue-600 flex items-center"
        >
          <FaPlus className='mr-2'></FaPlus> Add Library
        </Link>
      </div>
            <div className='container-xl lg:container m-auto px-4 py-6'>
                {libraries.length === 0 ? (
                    <p>No libraries</p>) : (
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                            {
                                libraries.map((library) => (
                                    omitUndefined(library),
                                    <LibraryCard key={library._id} library={library} />
                            ))}
                        </div>
                )}
            </div>
        </section>
     );
}
export default LibrariesPage;