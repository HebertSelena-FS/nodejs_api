const express = require("express");
const router = require("../router/router");

const app = express();
// http://localhost:3000
app.get("/", (req, res, next) => {
    res.status(200).json({message: "Service is up "})
})
//Router middleware
app.use("/character", router);

// adding middleware error handling and bad url paths
app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error)
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status,
            method: req.method,
        }
    })
})

module.exports = app;