import { Schema, model, models } from "mongoose";

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
        box_member: [
            {
                type: Schema.Types.ObjectId,
                ref: "Box",
            },
        ]
    }
);