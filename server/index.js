import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/connectDb.js"
dotenv.config()
const app = express()
import cors from "cors"
import cookieParser from "cookie-parser"
import authRouter from "./routes/auth.route.js"


app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use(express.json()) //converts json->js object without it req.body -> undefined
app.use(cookieParser())

app.use("/api/auth", authRouter)


const PORT = process.env.PORT || 6000

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
    connectDb()
})
