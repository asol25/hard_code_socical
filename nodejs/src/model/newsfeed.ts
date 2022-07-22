import mongoose from "mongoose";
import { Schema } from "mongoose";

const NewsfeedSchema = new Schema({
    nickname: {
        type: String,
        required: true,
    },

    picture: {
        type: String,
        required: true,
    },

    images: {
        type: String,
        required: true,
    },

    likes: {
        type: Array,
        required: false,
    },

    comments: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
    },
});

export const newsfeedModel = mongoose.model('newsfeed', NewsfeedSchema);