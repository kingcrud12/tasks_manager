import { InferSchemaType, Schema, model } from "mongoose";

const userSchema = new Schema({
    username : {type: String, unique: true},
    email: {type: String, required:true, unique: true, select: false},
    password: {type: String, required:true, unique: true, select:false}
}, {timestamps: true})

type User = InferSchemaType<typeof userSchema>

export default model<User>("user", userSchema)