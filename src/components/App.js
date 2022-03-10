import React from "react";
import { List, NoList } from "./List";
import { connect } from "react-redux";
import { addTodo } from "./action/updateList";

// rcredux
class App extends React.Component {
  state = { todo: "" };

  render() {
    // console.log(this.props);

    const changeInput = (e) => {
      this.setState({ todo: e.target.value });
    };

    // console.log(this.state);

    const handleSubmit = (e) => {
      e.preventDefault();

      if (this.state.todo) {
        this.props.addTodo(this.state.todo);
        this.setState({ todo: "" });
      }
    };

    return (
      <div id="toDoApp">
        <label id="toDoTitle" htmlFor="basic-input">
          <h2 className="text-monospace">Add new things To Do:</h2>
        </label>

        <form onSubmit={handleSubmit} id="toDoAdd" className="input-group">
          <input
            onChange={changeInput}
            value={this.state.todo}
            id="basic-input"
            className="form-control"
            type="text"
            placeholder="Thing to do"
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-outline-primary">
              Add
            </button>
          </div>
        </form>

        {this.props.task.length == 0 ? <NoList /> : <List task={this.props} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ task: state });

const mapDispatchToProps = { addTodo };

export default connect(mapStateToProps, mapDispatchToProps)(App);
