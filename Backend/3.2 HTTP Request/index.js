import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res ) => {
    res.send("<h1>Hello</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>+91 9950081731</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>I Am Naman Agrawal</h1>");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
})