import { Document } from "mongoose";
export interface Todo extends Document {
    id?: String,
    title: String,
    description: String
}