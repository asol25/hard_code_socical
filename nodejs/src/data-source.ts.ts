import mongoose from "mongoose";

export const db = () => {
    mongoose.connect('mongodb://localhost:27017/social-media').then(() => console.log('connect Database!')).catch((err) => console.error(err));
};

export default db