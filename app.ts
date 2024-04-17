import express, { Express, Request, Response, Application } from 'express';
import userRoute from './routes/users';

// Create an Express application
const port: number = 5005;
const app: Application = express();

// Define a function to start the server
const start = async (app: Application)=> {
  // Corrected route handler definition
  app.get("/", (req: Request, res: Response) => {
    try {
      res.status(200).json("REST API SERVER READY"); // Respond with 200 status code and plain text message
    } catch (error) {
      res.status(500).json("Internal Server Error"); // Respond with 500 status code in case of error
    }
  })
  app.use("/users", userRoute)
  app.listen(port, () => {
    console.log(`REST API SERVER READY AT http://localhost:${port}`);
  });
};

// Call the start function
start(app);
