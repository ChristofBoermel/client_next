import { Schema, model, models } from "mongoose";

const LibrarySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        created_by: {
            type: String,
            required: true,
        },
        pluscode: {
            type: String,
            required: true,
        },
        ort: {
            type: String,
            required: true,
        },
        images: [
            {
                type: String,
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Library = models.Library || model('Library', LibrarySchema);

export default Library;