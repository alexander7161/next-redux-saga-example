import { Button } from "@material-ui/core";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../store/user";
import { loginErrorSelector } from "../../store/user/selectors";
import { LoginContainer, LoginForm, LoginInput } from "./styles";

type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const dispatch = useDispatch();
  const error = useSelector(loginErrorSelector);
  const { handleSubmit, control, errors, formState } = useForm<FormValues>();

  const onSubmit = (values: FormValues) => {
    dispatch(signIn(values));
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <Controller
          as={
            <LoginInput
              label="Email"
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
              FormHelperTextProps={{
                style: { position: "absolute", top: "100%" },
              }}
            />
          }
          control={control}
          name="email"
          rules={{
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          }}
          defaultValue=""
        />
        <Controller
          as={
            <LoginInput
              label="Password"
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
              FormHelperTextProps={{
                style: { position: "absolute", top: "100%" },
              }}
            />
          }
          control={control}
          name="password"
          rules={{ required: "Required" }}
          defaultValue=""
        />

        {formState.isSubmitted && formState.isSubmitSuccessful && error}

        <Button variant="contained" type="submit" disabled={!formState.isDirty}>
          Login
        </Button>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
