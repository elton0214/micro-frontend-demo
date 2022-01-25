const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

//不管打甚麼url 都先回到index.html
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(process.env.PORT || 3000, function () {
    console.log("express has started on port 3000");
  });

// app.listen(process.env.PORT || 5060, () => console.log("Server running..."));