import express, { Express, Request, Response,} from 'express';

const userRoute : Express = express()

userRoute.get("/"), async (req: Request, res: Response) =>{
try {
res.status(200).json("this is get method")
} catch (error) {
    res.status(500).json(error)
}
}

userRoute.get("/"), async (req: Request, res: Response) =>{
try {
res.status(200).json("this is get method")
} catch (error) {
res.status(500).json(error)
}
}

userRoute.get("/"), async (req: Request, res: Response) =>{
try {
res.status(200).json("this is post method")
} catch (error) {
res.status(500).json(error)
}
}

userRoute.get("/"), async (req: Request, res: Response) =>{
try {
res.status(200).json("this is put method")
} catch (error) {
res.status(500).json(error)
}
}

userRoute.get("/"), async (req: Request, res: Response) =>{
try {
res.status(200).json("this is delete method")
} catch (error) {
res.status(500).json(error)
}}

export default userRoute