import React from "react";
import App, { AppInitialProps, AppContext } from "next/app";
import { END } from "redux-saga";
import { SagaStore, wrapper } from "..//store";
import Router from "next/router";
import CssBaseline from "@material-ui/core/CssBaseline";
import Head from "next/head";
import ThemeProvider from "../components/ThemeProvider";
import cookies from "next-cookies";

class WrappedApp extends App<AppInitialProps> {
  public static getInitialProps = async ({ Component, ctx }: AppContext) => {
    const { token } = cookies(ctx);
    if (ctx.pathname.startsWith("/users") && !token) {
      if (ctx && ctx.req) {
        console.log("server side");
        ctx.res.writeHead(302, { Location: `/` });
        ctx.res.end();
      } else {
        console.log("client side");
        Router.push(`/`);
      }
    }

    // 1. Wait for all page actions to dispatch
    const pageProps = {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    };

    // 2. Stop the saga if on server
    if (ctx.req) {
      ctx.store.dispatch(END);
      await (ctx.store as SagaStore).sagaTask.toPromise();
    }

    // 3. Return props
    return {
      pageProps,
    };
  };

  public render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>My page</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
        </Head>
        <ThemeProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}

export default wrapper.withRedux(WrappedApp);
