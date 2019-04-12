import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class ItemLi extends Component {

  static propTypes = {
    item: PropTypes.object,
  };

  constructor(props) {
    super(props);
  }

  remove(e) {
    console.log("remove")
    console.log(e.target)
    console.log(e.target.id)

    document.getElementById(e.target.id).remove();

    /*const newList = this.props.list.map((item, index) => {
      return (
        console.log(item)
        //<ItemLi item={item} key={item + index}/>
      )
    });*/
  }

  render() {
    return (

      <li className="list-group-item todo-item " id={this.props.item.id} key={this.props.item.id}>
        <span className="item-name">{this.props.item.text}</span>
        <button className="btn btn-outline-primary float-right">Done</button>
        <button className="btn btn-outline-danger float-right" id={this.props.item.id} onClick={this.remove} key={this.props.item.id}>Remove</button>
      </li>
    )
  }
}
