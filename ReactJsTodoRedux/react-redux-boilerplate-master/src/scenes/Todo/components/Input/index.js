import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {

  static propTypes = {
    onKeyPress: PropTypes.func,
    onEnterPress: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.testKeyDown = this.testKeyDown.bind(this);
  }

  handleKeyPress(e) {
    this.props.onKeyPress(e.target.value)
  }

  testKeyDown(e) {
    if (e.key === 'Enter') {
      this.props.onKeyPress(e.target.value);
      this.props.onEnterPress();
    }
  }

  render() {
    return (
      <input type="text" className="form-control" id="input" onChange={this.handleKeyPress}
             onKeyDown={this.testKeyDown}/>
    )
  }
}
