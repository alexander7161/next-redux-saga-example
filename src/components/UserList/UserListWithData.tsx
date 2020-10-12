import { CircularProgress } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import {
  userListLoadingSelector,
  userListSelector,
} from "../../store/userList/selectors";
import UserList from "./UserList";

const UserListWithData = () => {
  const userList = useSelector(userListSelector);
  const loading = useSelector(userListLoadingSelector);

  if (loading) {
    return <CircularProgress />;
  }

  return <UserList userList={userList} />;
};

export default UserListWithData;
