import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/connectDb.js"
dotenv.config()
const app = express()
import cors from "cors"
import cookieParser from "cookie-parser"
import authRouter from "./routes/auth.route.js"
import userRouter from "./routes/user.route.js"
import interviewRouter from "./routes/interview.route.js"
import paymentRouter from "./routes/payment.route.js"


app.use(cors({
    origin:"https://intervio-client.onrender.com",
    credentials:true
}))

app.use(express.json()) //converts json->js object without it req.body -> undefined
app.use(cookieParser())

app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/interview", interviewRouter)
app.use("/api/payment", paymentRouter)


const PORT = process.env.PORT || 6000

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
    connectDb()
})
