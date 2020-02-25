import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
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
      <Helmet>
        <title>Users App</title>
        <meta property="og:title" content="User App" />
      </Helmet>
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
const loadData = store => {
  return store.dispatch(userFetch());
};
export default {
  loadData,
  component: connect(
    mapState,
    mapDispatch
  )(Users)
};
