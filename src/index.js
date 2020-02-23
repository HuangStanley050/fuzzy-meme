import "core-js/stable";
import "regenerator-runtime/runtime";
import express from "express";
import proxy from "express-http-proxy";
import renderer from "./helpers/renderer";
import createStore from "./helpers/setupStore";
import Routes from "./client/Routes";
import { matchRoutes } from "react-router-config";
import API from "./api";

const app = express();
app.use(
  "/api",
  proxy(API.root, {
    proxyReqOptDecorator(opts) {
      opts.headers["x-forwarded-host"] = "localhost:3000";
      return opts;
    }
  })
);
app.use(express.static("public"));
app.get("*", async (req, res) => {
  const store = createStore(req);
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  await Promise.all(promises);
  const context = {};
  const content = renderer(req, store, context);
  if (context.notFound) {
    res.status(404);
  }
  res.send(content);
});

app.listen(process.env.PORT || 3000, () =>
  console.log("rendering server running....")
);
