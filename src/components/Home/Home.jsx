import React, { Component, Fragment } from "react";
import Lottie from "react-lottie";
import animationData from "./animationdata.json";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData
      // rendererSettings: {
      //   preserveAspectRatio: "xMidYMid slice"
      // }
    };
    return (
      <Fragment>
        <h2>Home </h2>
        <Lottie options={defaultOptions} height={400} width={400} />
      </Fragment>
    );
  }
}

export default Home;
