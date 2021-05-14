import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    username: {
        type: String,
        unique: true
    }
});

export default model("User", userSchema);