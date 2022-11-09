import express from "express";
import cors from "cors";

// Express init
const app = express();

// Express middleware
app.use(express.json({limit: "30mb"}))
app.use(express.urlencoded({limit: "30mb"}))
app.use(cors());

const port = 3000;

app.listen(port, () => {
    console.log(`Express is listening at http://localhost:${port}`);
    
})