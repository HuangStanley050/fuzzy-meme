import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({ auth }) => {
  console.log("auth status is: ", auth);
  return (
    <div>
      <Link to="/">SSR</Link>
    </div>
  );
};
const mapState = state => ({
  auth: state.auth
});
export default connect(mapState)(Header);
