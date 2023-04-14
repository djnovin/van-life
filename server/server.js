const express = require("express");
const app = express();

// route for api
app.get("/api", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree"] });
});

app.listen(5000, () => {
  console.log(`Server listening on port 5000`);
});
