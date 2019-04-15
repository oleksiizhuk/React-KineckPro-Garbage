import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {

  static propTypes ={
    onKeyPress: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
      this.props.onKeyPress(e.target.value)
  }

  render() {
    return (
      <input type="text" className="form-control" id="input" onChange={this.handleKeyPress}/>
    )
  }
}
