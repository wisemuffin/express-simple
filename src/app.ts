import * as express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("The sedulous hyena ate the antelope!");
});

/**
 * Example of Route params
 */
app.get("/profile/:id", (req, res) => {
  res.send(`profile ${req.params.id}`);
});

app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
