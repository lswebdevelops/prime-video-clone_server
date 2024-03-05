require("dotenv").config();
const cors = require("cors");
const express = require("express");
const connectDB = require("./connectDB");
const Movie = require("./models/Movies");

const app = express();
const PORT = process.env.PORT || 8000;

connectDB();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// get movies

app.get("/api/movies", async (req, res) => {
  try {

    const genre = req.query.genre;

    const filter = {};
    if(genre) {
        filter.genre = genre;

    }
    



    const data = await Movie.find(filter);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching movies." });
  }
});

// get app

app.get("/", (req, res) => {
  res.json("Hello Videos!!");
});

// 404
app.get("*", (req, res) => {
  res.sendStatus("404");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

// 25:21 / 2:02:53 Client
