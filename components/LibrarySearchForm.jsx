'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

const LibrarySearchForm = () => {

    const router = useRouter();
    const [ort, setOrt] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (ort === '') {
            router.push('/libraries');
        }else{
            const query = `?ort=${ort}`;
            router.push(`/libraries/search-results${query}`);
        }

    }

    return ( 
        <form onSubmit={handleSubmit} className="mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center">
            <div className="w-full md:w-3/5 md:pr-2 mb-4 md:mb-0">
              <label htmlFor="location" className="sr-only">Location</label>
              <input
                type="text"
                id="location"
                placeholder="Your location"
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
                value={ort}
                onChange={(e) => setOrt(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="md:ml-4 mt-4 md:mt-0 w-full md:w-auto px-6 py-3 rounded-lg bg-[#867754] text-white hover:bg-[#65593f] focus:outline-none focus:ring focus:ring-blue-500"
            >
              Search
            </button>
          </form>
     );
}
 
export default LibrarySearchForm;