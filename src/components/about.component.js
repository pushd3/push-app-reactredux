import React, { Component } from "react";
// Redux
import { connect } from "react-redux";
import { aboutPageLoaded } from "../state/about/about.actions";

const mapStateToProps = (state) => {
  return {
    stackList: state.aboutPage.stackList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    aboutPageLoaded: dispatch(aboutPageLoaded(true)),
  };
};

class About extends Component {
  componentDidMount() {
    this.props.dispatch(aboutPageLoaded(true));
  }
  render() {
    return (
      <div>
        <h3>Stack </h3>
        <ul>
          {this.props.stackList.map((stack) => (
            <li>{stack}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps)(About);
