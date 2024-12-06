import LibraryCard from '../../components/LibraryCard';
import connectDB from '@/config/database';
import Library from '@/models/library';

const LibrariesPage = async() => {
    await connectDB();
    const libraries = await Library.find({});
    console.log(libraries);

    return ( 
        <section className='px-4 py-6'>
            <div className='container-xl lg:container m-auto px-4 py-6'>
                {libraries.length === 0 ? (
                    <p>No libraries</p>) : (
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                            {
                                libraries.map((library) => (
                                    <LibraryCard key={library._id} library={library} />
                            ))}
                        </div>
                )}
            </div>
        </section>
     );
}
export default LibrariesPage;