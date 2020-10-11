import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { signOut } from "../../../store/user";
import { TopBarContainer } from "./styles";

const TopBar = () => {
  const dispatch = useDispatch();
  return (
    <TopBarContainer>
      <Button variant="contained" onClick={() => dispatch(signOut())}>
        Logout
      </Button>
    </TopBarContainer>
  );
};

export default TopBar;
