import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/logo.png";

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return ( 
        <footer className="bg-gray-200 py-4 mt-auto">
        <div
          className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4"
        >
          <div className="mb-4 md:mb-0">
            <Image 
            src={logo}
            alt="Logo" 
            className="h-8 w-auto" 
            width={0}
            height={0}
            sizes="100vw"
            />
          </div>
          <div
            className="flex flex-wrap justify-center md:justify-start mb-4 md:mb-0"
          >
            <ul className="flex space-x-4">
              <li><Link href="/libraries">Libraries</Link></li>
              <li><Link href="/">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm text-gray-500 mt-2 md:mt-0">
              &copy; {currentYear} Tiny Libraries. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
     );
}
 
export default Footer;