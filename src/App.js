import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import AddUsers from "./components/Users/AddUsers";
import UsersList from "./components/Users/UsersList";

function App() {
  const newUserList = useSelector((state) => state.user);

  return (
    <Fragment>
      <AddUsers />
      <UsersList users={newUserList} />
    </Fragment>
  );
}

export default App;
