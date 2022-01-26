const express = require("express");
const path = require("path");
const cors = require('cors');

const app = express();
// app.use(cors());

app.use(cors({origin: '*'}));
// app.use(function (req, res, next) {

//   // Website you wish to allow to connect
//   res.setHeader('Access-Control-Allow-Origin', '*');

//   // Request methods you wish to allow
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//   // Request headers you wish to allow
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   res.setHeader('Access-Control-Allow-Credentials', true);

//   // // Pass to next layer of middleware
//   // next();
// });

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

//不管打甚麼url 都先回到index.html
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(process.env.PORT || 3000, function () {
    console.log("express has started on port 3000");
  });

// app.listen(process.env.PORT || 5060, () => console.log("Server running..."));