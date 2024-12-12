import Navbar from '@/components/Navbar';
import '@/assets/styles/globals.css';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'client_next',
    keywords: 'books, library, reading, nextjs, community, book club',
    description: 'This is a description of my website',
};

const MainLayout = ({ children }) => {
    return ( 
    <html>
        <body>
            <Navbar></Navbar>
            <main>{children}</main>
            <Footer></Footer>
        </body>
    </html> 
    );
}
 
export default MainLayout;