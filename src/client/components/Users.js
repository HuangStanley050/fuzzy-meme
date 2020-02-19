import React, { useEffect } from "react";
import { userFetch } from "../store/actions/userActions";
import { connect } from "react-redux";

const Users = props => {
  useEffect(() => {
    props.fetch();
  }, []);
  return <div>nothing yet...</div>;
};
const mapDispatch = dispatch => ({
  fetch: () => dispatch(userFetch())
});
const mapState = state => ({
  users: state.user.users
});
export default connect(
  mapState,
  mapDispatch
)(Users);
