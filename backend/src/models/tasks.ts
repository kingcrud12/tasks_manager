import { model, Schema, InferSchemaType } from "mongoose";

const taskSchema = new Schema({
    userId : {type: Schema.Types.ObjectId, unique:true, required:true},
    title : {type: String, required: true},
    text: {type: String},

}, {timestamps:true})

type Note = InferSchemaType<typeof taskSchema>

export default model<Note>("Note", taskSchema);