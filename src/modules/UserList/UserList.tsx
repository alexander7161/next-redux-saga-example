import { Button, TextField } from "@material-ui/core";
import React from "react";
import Page from "../../components/Page";

const UserList = () => {
  return (
    <Page>
      <div>
        <Button>Add New User</Button>
        <div>
          <TextField></TextField>
          <Button>Search</Button>
        </div>
      </div>
    </Page>
  );
};

export default UserList;
