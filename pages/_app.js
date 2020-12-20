import "../styles/globals.css";
import App from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import createStore from "../store";
import { toast } from "react-toastify";
toast.configure({
  hideProgressBar: true,
  closeOnClick: true,
  bodyClassName: "text-white regular",
});

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return { pageProps };
  }

  componentDidMount() {
    require("react-toastify/dist/ReactToastify.css");
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
        <Component {...pageProps} />
    );
  }
}

const wrapper = createWrapper(createStore, { debug: true });
export default wrapper.withRedux(MyApp);
