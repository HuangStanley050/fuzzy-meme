import React from "react";
//import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UsersPage, { loadData } from "./pages/UsersPage";

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
    path: "/",
    component: HomePage,
    exact: true
  },
  {
    path: "/users",
    component: UsersPage,
    loadData
  }
];
