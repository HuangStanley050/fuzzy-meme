import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAdmins } from "../store/actions/adminActions";

const Admin = props => {
  useEffect(() => {
    props.getAdmins();
  }, []);
  const renderAdmins = () => {
    return props.admins.map(admin => <li key={admin.id}>{admin.name}</li>);
  };
  return (
    <div>
      <h3>Protected list of admins</h3>
      <ul>{renderAdmins()}</ul>
    </div>
  );
};
const mapState = state => ({
  admins: state.admin
});
const mapDispatch = dispatch => ({
  getAdmins: () => dispatch(fetchAdmins())
});
export default {
  component: connect(
    mapState,
    mapDispatch
  )(Admin),
  loadData: ({ dispatch }) => dispatch(fetchAdmins())
};
