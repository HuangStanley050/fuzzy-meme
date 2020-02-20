import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import Routes from "../client/Routes";

export default (req, store) => {
  const app = (
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );
  const content = renderToString(app);
  return `
  <html>
    <head>

    </head>
    <body>
      <div id="root">
      ${content}
      </div>
      <script src="bundle.js"></script>
    </body>
  </html>
  `;
};
