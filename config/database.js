import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
    mongoose.set('strictQuery', false);

    // If the connection is already established, return immediately
    if (connected) {
        console.log("already connected");
        return;
    }

        await mongoose.connect(process.env.MONGODB_URI);
        connected = true;
    
};

export default connectDB;