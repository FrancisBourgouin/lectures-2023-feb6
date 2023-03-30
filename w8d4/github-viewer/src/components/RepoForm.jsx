// React.Component Class => Concept of state, concept of lifecycle methods
import React from "react";

export default class RepoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      owner: "",
      repo: "",
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ ...this.state, [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.setState({
      owner: "",
      repo: "",
    });
  };
  // handleChange = function (event) {
  //   const { name, value } = event.target;

  //   this.setState({ ...this.state, [name]: value });
  // };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="owner"
          onChange={this.handleChange}
          value={this.state.owner}
        />
        <input
          type="text"
          name="repo"
          onChange={this.handleChange}
          value={this.state.repo}
        />
        <button>Fetch commits</button>
      </form>
    );
  }
}

// export default function RepoForm(props) {
//   return (
//     <form>
//       <input type="text" name="owner" />
//       <input type="text" name="repo" />
//       <button>Fetch commits</button>
//     </form>
//   );
// }
