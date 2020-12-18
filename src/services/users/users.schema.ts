import {model,Schema} from "mongoose"

import {IUsers} from "./users"

const schema : Schema = new Schema({},{timestamps:true})

export default model<IUsers>('Users',schema)
