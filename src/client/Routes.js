import React from "react";
//import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";
import App from "./App";

// export default () => {
//   return (
//     <div>
//       <Route exact path="/" component={Home} />
//       {/*<Route path="/hi" component={() => "hi"} />*/}
//       <Route path="/users" component={Users} />
//     </div>
//   );
// };
export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: "/",
        exact: true
      },
      { ...UsersPage, path: "/users" }
    ]
  }
];
