import React, {Component} from 'react';

export default class Button extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className="btn btn-outline-primary" type="button" id="addItem" onClick={this.props.onClick}>
        Add
      </button>
    )
  }
}
