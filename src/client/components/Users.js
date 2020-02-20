import React, { useEffect } from "react";
import { userFetch } from "../store/actions/userActions";
import { connect } from "react-redux";

const Users = props => {
  useEffect(() => {
    props.fetch();
  }, []);
  const userList = () => {
    return props.users.map(user => <li key={user.id}>{user.name}</li>);
  };
  return (
    <div>
      nothing yet...
      <ul>{userList()}</ul>
    </div>
  );
};
const mapDispatch = dispatch => ({
  fetch: () => dispatch(userFetch())
});
const mapState = state => ({
  users: state.user.users
});
export const loadData = () => {
  console.log("I am trying to data");
};
export default connect(
  mapState,
  mapDispatch
)(Users);
