import { TextField } from "@material-ui/core";
import styled from "styled-components";

export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const LoginInput = styled(TextField)`
  && {
    margin-bottom: 32px;
  }
`;
