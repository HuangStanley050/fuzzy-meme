import "core-js/stable";
import "regenerator-runtime/runtime";
import express from "express";
import renderer from "./helpers/renderer";
import createStore from "./helpers/setupStore";
import Routes from "./client/Routes";
import { matchRoutes } from "react-router-config";

const app = express();
app.use(express.static("public"));
app.get("*", async (req, res) => {
  const store = createStore();
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });
  await Promise.all(promises);
  res.send(renderer(req, store));
});

app.listen(process.env.PORT || 8000, () =>
  console.log("rendering server running....")
);
