import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class SortButton extends Component {

  static propTypes = {
    id: PropTypes.string,
    classN: PropTypes.string,
    html: PropTypes.string,
    onFunc: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.func = this.func.bind(this);
  }

  func() {
    this.props.onFunc();
  }

  render() {
    return (
      <button className={this.props.classN} id={this.props.id} onClick={this.func}>{this.props.html}</button>
    )
  }

}
