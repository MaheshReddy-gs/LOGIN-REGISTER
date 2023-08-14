import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        default: "visitor"
    }
})

const UserModel = model("users", UserSchema)
export default UserModel