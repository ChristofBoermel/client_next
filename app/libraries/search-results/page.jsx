// import connectDB from "@/config/database";
// import Library from "@/models/library";
// import { convertToSerializeableObject } from "@/utils/convertToObject";
// import { FaArrowAltCircleLeft } from "react-icons/fa";
// import Link from "next/link";
// import LibrarySearchForm from "@/components/LibrarySearchForm";
// import LibraryCard from "@/components/LibraryCard";

// const SearchResultspage = async({searchParams}) => {
    
//     await connectDB();

//     const {ort} = await searchParams;

//     const locationPattern = new RegExp(ort, 'i');

//     let query = {
//         $or: [
//             { name: locationPattern },
//             { 'ort': locationPattern },
//         ],
//     }

//     const librariesQueryResults = await Library.find(query).lean();
//     const libraries = convertToSerializeableObject(librariesQueryResults);

//     console.log(libraries); 

//     return (
//         <>
//         <section className="bg-[#ebe0c7] py-4">
//             <div className="max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8">
//                 <LibrarySearchForm></LibrarySearchForm>
//             </div>
//         </section>
//         <section className="px-4 py-6">
//             <div className="container-xl lg:container m-auto px-4 py-6">
//                 <Link href="/libraries" className="flex items-center text-blue-500 hover:underline mb-3">
//                     <FaArrowAltCircleLeft className="mr-2 mb-1"/> Back to Libraries
//                 </Link>
//                 <h1 className="text-2xl mb-4">Search results</h1>
//                 {libraries.length === 0 ? (<p>No libraries found</p>) : (
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                         {libraries.map((library) => (
//                             <LibraryCard key={library._id} library={library}></LibraryCard>
//                         ))}
//                         </div>
//                 )}
//             </div>
//         </section>
//         </>
//       );
// }
 
// export default SearchResultspage;