import mongoose from "mongoose";
import { Schema } from "mongoose";
import isEmail from "validator/lib/isEmail";


const userSchema = new Schema({
    //@ts-ignore
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        validate: {
            validateEmail: [isEmail, 'invalid email'],
            message: 'Email validation failed'
        },
    },

    username: {
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
        required: true,
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