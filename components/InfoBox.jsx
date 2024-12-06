import { Users } from "lucide-react";


const InfoBoxes = ({ heading, backgroundColor = 'bg-gray-100',children }) => {
    return ( 
        <div className= {`${backgroundColor} p-6 rounded-lg shadow-md`}>
        <h2 className="text-2xl font-bold">{heading}</h2>
        {/* //todo multiple lucide icons */}
        <Users className="w-12 h-12 mb-4 text-primary"></Users>
        <p className="mt-2 mb-4">
          {children}
        </p>
      </div>
    );
}
 
export default InfoBoxes;