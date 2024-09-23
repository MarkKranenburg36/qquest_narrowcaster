import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import stations from "./api/stations.js"
import departures from "./api/departures.js"

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ origin: ['https://qquestlabs.nl/', 'http://localhost:5173']}));

app.use("/stations", (req, res, next) => stations(req, res, next))

app.use("/departures", (req, res, next) => departures(req, res, next))

app.get("/health", (req, res) =>{
    res.send("ok")
})

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})