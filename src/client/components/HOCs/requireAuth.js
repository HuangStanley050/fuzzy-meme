import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export default ChildComponent => {
  const requireAuth = props => {
    switch (props.auth) {
      case false:
        return <Redirect to="/" />;
      case null:
        return <div>Loading...</div>;
      default:
        return <ChildComponent {...props} />;
    }
  };
  const mapState = state => ({ auth: state.auth });
  return connect(mapState)(requireAuth);
};
