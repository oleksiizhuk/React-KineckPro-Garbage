import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {

  static propTypes = {
    onClick: PropTypes.func,
  };

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
