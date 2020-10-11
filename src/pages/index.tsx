import React from "react";
import { wrapper } from "../store";
import Login from "../modules/Login";

const Index = () => {
  return <Login />;
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {});

export default Index;
