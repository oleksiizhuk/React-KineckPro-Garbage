import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class ItemLi extends Component {

  static propTypes = {
    item: PropTypes.object,
    onRemove: PropTypes.func,
    onDoneItem: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      id: this.props.item.id
    };

    this.remove = this.remove.bind(this);
    this.doneItem =this.doneItem.bind(this);
  }

  doneItem() {
    this.props.onDoneItem(this.state.id);
  }

  remove() {
    this.props.onRemove(this.state.id);
  }

  render() {
    return (

      <li className="list-group-item todo-item " id={this.props.item.id} key={this.props.item.id}>
        <span className="item-name">{this.props.item.text}</span>
        <button className="btn btn-outline-primary float-right" onClick={this.doneItem}>Done</button>
        <button className="btn btn-outline-danger float-right" id={this.props.item.id} onClick={this.remove}>Remove
        </button>
      </li>
    )
  }
}
