import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { simpleAction } from "./actions/simpleAction";
import "./App.scss";
import Home from "./components/Home";
import Profile from "./components/Profile/Profile";
import Routes from "./Routes";
import Header from "./components/common/header/header";
import Footer from "./components/common/footer/footer";
import ProductCard from "./components/ProductCard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  simpleAction = event => {
    this.props.simpleAction();
  };
  render() {
    console.log("app called");
    return (
      <Fragment>
        {/* <button onClick={this.simpleAction}>Test redux action</button>
            <pre>{JSON.stringify(this.props)}</pre>
            <h1 className="float-centre">Hello Team !</h1> */}
        <Header />
        <Routes />
		<ProductCard />
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
