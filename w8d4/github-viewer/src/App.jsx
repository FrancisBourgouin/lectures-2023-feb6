import React from "react";
import axios from "axios";

import Header from "./components/Header";
import RepoForm from "./components/RepoForm";
import CommitList from "./components/CommitList";

import "./App.css";
import Spy from "./components/Spy";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      commitData: null,
      spyFound: false,
    };
  }

  fetchCommits = (options) => {
    const { owner, repo } = options;
    const url = `https://api.github.com/repos/${owner}/${repo}/commits`;

    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => this.setState({ ...this.state, commitData: data }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Header />
        {!this.state.spyFound && <Spy />}
        <RepoForm onSubmit={this.fetchCommits} />
        {this.state.commitData && (
          <CommitList commits={this.state.commitData} />
        )}
      </div>
    );
  }
}
