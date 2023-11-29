import "dotenv/config";
import express from "express"
import usersRoute from "./routes/users"
import morgan from "morgan";



//set up server
const app = express()

//middlewares
app.use(morgan("dev"))
app.use(express.json());

//api
app.use("/api/users", usersRoute)


export default app