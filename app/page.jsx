import Hero from '@/components/Hero';
import InfoBoxes from '@/components/InfoBoxes';
import connectDB from '../config/database';

const HomePage = () => {
    connectDB();
    return (
        <>
        <Hero></Hero>
        <InfoBoxes></InfoBoxes>
        </>
    );
};
export default HomePage;