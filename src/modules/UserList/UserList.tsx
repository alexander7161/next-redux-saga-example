import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import Page from "../../components/Page";
import { userListSelector } from "../../store/userList/selectors";
import UserListComponent from "../../components/UserList";
const UserList = () => {
  return (
    <Page>
      <div>
        <Button>Add New User</Button>
        <div>
          <TextField></TextField>
          <Button>Search</Button>
        </div>
        <UserListComponent />
      </div>
    </Page>
  );
};

export default UserList;
