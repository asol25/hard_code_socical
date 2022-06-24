import mongoose from "mongoose";
import { Schema } from "mongoose";

const profileSchema = new Schema({
    nickname: {
        type: "string",
        required: true,
    },

    following: {
        type: Array,
        required: false,
    },

    followers: {
        type: Array,
        required: false,
    },
});

export const profileModel = mongoose.model('profile', profileSchema);