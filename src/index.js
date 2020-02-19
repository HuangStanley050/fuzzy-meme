import "core-js/stable";
import "regenerator-runtime/runtime";
import express from "express";
import renderer from "./helpers/renderer";
import createStore from "./helpers/setupStore";
const app = express();
app.use(express.static("public"));
app.get("*", (req, res) => {
  const store = createStore();
  res.send(renderer(req, store));
});

app.listen(process.env.PORT || 8000, () =>
  console.log("rendering server running....")
);
