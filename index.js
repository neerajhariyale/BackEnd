const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const blogRoutes = require("./routes/blogs");

app.use("/api/v1", blogRoutes);

app.listen(PORT , ()=>{
    console.log(`Server Started Successfully ${PORT}`);
})

const dbConnect = require("./config/database");
dbConnect();

app.get("/", (req,res) => {
    res.send(`<h1>BLOG WEBSITE </h1>`)
})