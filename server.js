import express from "express";
import mongoose from "mongoose";
import Videos from "./dbModel.js";

//App config
const app = express();
const port = process.env.PORT || 8001;
const connection_url =
  "mongodb+srv://dhritishman22:YDSpbU03VeNlaEX6@cluster0.he6wh.mongodb.net/tiktokdb?retryWrites=true&w=majority";

//middlewares
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

//DB config
mongoose.connect(
  connection_url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB!!!");
  }
);

//API endpoints
app.get("/", (req, res) => res.status(200).send("HELLOWORLD"));

// app.get("/v1/posts", (req, res) => res.status(200).send(Data));

app.get("/v2/posts", (req, res) => {
  Videos.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/v2/posts", (req, res) => {
  const dbVideos = req.body;
  Videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
