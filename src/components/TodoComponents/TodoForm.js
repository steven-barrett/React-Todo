import React from "react";

class ItemForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: ""
    };
  }
  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  addItem = e => {    
    e.preventDefault();
    if (e.target.value === ''){
        return;
    }
    this.props.addItem(this.state.item);
    this.setState({
      item: ""
    });
  };
  removeCompleted = e => {
      e.preventDefault();
      this.props.removeCompleted();
  }
  render() {
    return (
      <form>
        <input
          placeholder='Task'
          value={this.state.item}
          name="item"
          onChange={this.handleChanges}
        />
        <button onClick={this.addItem}>Add Task</button>
        <button onClick={this.removeCompleted}>Remove Completed</button>
      </form>
    //   onSubmit={this.addItem} NO
    );
  }
}

export default ItemForm;
