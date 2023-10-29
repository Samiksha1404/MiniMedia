const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
<<<<<<< HEAD
const postRoute = require("./routes/post");
const conversationRoute = require("./routes/conversation");
const messageRoute = require("./routes/message");

=======
const postRoute = require("./routes/posts");
const path = require("path")
>>>>>>> 30058112acea020824711c5268ca14cc331a7580
dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(()=>console.log("Database is connected")).catch(()=>{
    console.log("Some error occured");
});

app.use("/images",express.static(path.join(__dirname,"public/images")));

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
<<<<<<< HEAD
app.use("/api/post", postRoute);
app.use("/api/conversation",conversationRoute);
app.use("/api/message", messageRoute);

=======
app.use("/api/posts", postRoute);
>>>>>>> 30058112acea020824711c5268ca14cc331a7580

app.listen(8800, () => {
  console.log("Backend server is running!");
});


