import React from "react";
//import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";

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
    ...HomePage,
    path: "/",
    exact: true
  },
  { ...UsersPage, path: "/users" }
];
