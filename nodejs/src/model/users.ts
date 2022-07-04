import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },

    nickname: {
        type: String,
        trim: true,
        required: true,
    },

    updated_at: {
        type: Date,
        required: true,
    },

    token: {
        type: String,
        trim: true,
    },

    picture: {
        type: String,
        required: true,
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