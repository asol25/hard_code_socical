import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
    },

    nickname: {
        type: String,
        trim: true,
    },

    updated_at: {
        type: Date,
    },

    token: {
        type: String,
        trim: true,
    },

    picture: {
        type: String,
        trim: false,
    },

    profile: {
        type: Object,
        ref: 'profile',
    },

    newsfeed: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'newsfeed'
        }
    ]

});

export const userModel = mongoose.model('user', userSchema);