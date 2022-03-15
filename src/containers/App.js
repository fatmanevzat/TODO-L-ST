import React, { Component } from "react";
import { connect } from "react-redux";
import Picker from "../components/Picker";
import Posts from "../components/Posts";
import { fetchPosts } from "../actions";

class App extends Component {
  state = { selectedSubreddit: "" };

  render() {
    const { posts, error, lastUpdated, fetchPosts } = this.props;
    const { selectedSubreddit } = this.state;

    const onChange = (item) => {
      this.setState({ selectedSubreddit: item });
      fetchPosts(item);
    };

    return (
      <div>
        <Picker
          value={selectedSubreddit}
          onChange={onChange}
          options={[
            "reactjs",
            "frontend",
            "javascript",
            "reduxjs",
            "backend",
            "nodejs",
            "mongodb",
            "reduc",
            "undefined",
          ]}
        />
        <p>
          {lastUpdated && (
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.{" "}
            </span>
          )}
        </p>
        <Posts posts={posts} error={error} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    error: state.error,
    lastUpdated: state.lastUpdated,
  };
};

const mapDispatchToProps = { fetchPosts };

export default connect(mapStateToProps, mapDispatchToProps)(App);
