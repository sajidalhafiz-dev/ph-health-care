import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { IndexRoutes } from './routes'
import { toNodeHandler } from 'better-auth/node'
import { auth } from './lib/auth'

const app: Application = express()

app.use(cors({
    origin: process.env.APP_URL || "http://localhost:3000", // client side url
    credentials: true
}))

// app.all("/api/auth/*", toNodeHandler(auth));
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use("/api/v1", IndexRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app