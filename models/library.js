'use server';

import { Schema, model, models,  } from "mongoose";

const BookSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        isbn: {
            type: Number,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        publisher: {
            type: String,
            required: true,
        },
        published_date: {
            type: Date,
            required: true,
        },
        is_available: {
            type: Boolean,
            default: false,
        },
    },
    {
        ignoreUndefined: true,
    }
);

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
        images: {
            type: [String],
            default: undefined,
            ignoreUndefined: true,
        },
        books: {
            type: [BookSchema],
            default: undefined,
            ignoreUndefined: true,
        },
    },
    {
        ignoreUndefined: true,
    },
    {
        timestamps: true,
    }
);


const Library = models.Library || model('Library', LibrarySchema);

export default Library;