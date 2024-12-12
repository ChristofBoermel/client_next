'use server';
import connectDB from "@/config/database";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Library from "@/models/library";

async function addBook(formData) {
    await connectDB();

    const libraryData = {
        name: formData.get('name'),
        created_by: formData.get('created_by'),
        pluscode: formData.get('pluscode'),
        ort: formData.get('ort'),
        images: 
            formData.get('images').name   
        ,
    };  
    console.log(libraryData);
    const newLibrary = new Library(libraryData);
    await newLibrary.save();

    revalidatePath('/', 'layout');

    redirect(`/libraries/${newLibrary._id}`);
}

export default addBook; 