import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.css'

export default class ItemLi extends Component {

  static propTypes = {
    item: PropTypes.object,
    onRemove: PropTypes.func,
    onDoneItem: PropTypes.func,
    onKeyPress: PropTypes.func,
    onEditItem: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      id: this.props.item.id,
      flag: this.props.item.flag,
      value: this.props.item.text,
      isEditInput: true
    };

    this.remove = this.remove.bind(this);
    this.doneItem = this.doneItem.bind(this);
    this.isEditItem = this.isEditItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.isFocused = this.isFocused.bind(this);
    this.enterPress = this.enterPress.bind(this);
    this.chancheState = this.chancheState.bind(this);
  }

  chancheState() {
    this.setState({
      id: this.props.item.id,
      flag: this.props.item.flag,
      value: this.props.item.text,
    },);
  }

  isFocused() {
    this.chancheState();
    this.setState({isEditInput: !this.state.isEditInput});
  }

  isEditItem(e) {
    this.isFocused();
    this.props.onEditItem(this.props.item.id, e.target.value);
  }

  enterPress(e) {
    if (e.key === 'Enter') {
      this.isEditItem(e);
    }
  }

  editItem(e) {
    const inputText = e.target.value;
    if (inputText.trim().length < 1) {
      return;
    }
    this.setState({value: inputText});
    this.props.onKeyPress(e.target.value);
  }

  doneItem() {
    this.props.onDoneItem(this.props.item.id);
  }

  remove() {
    this.props.onRemove(this.props.item.id);
  }

  render() {
    return (
      <li className="list-group-item todo-item " id={this.props.item.id} key={this.props.item.id}
          onDoubleClick={this.isFocused}>
        {this.state.isEditInput === true ?
          <span
            className={this.props.item.flag ? 'completed item-name' : 'unCompleted item-name'}> {this.props.item.text}
        </span> :
          <input type="text"
                 value={this.state.value}
                 onChange={this.editItem}
                 onKeyDown={this.enterPress}
                 onBlur={this.isEditItem}
                 autoFocus={true}
          />}
        <button className="btn btn-outline-primary float-right" onClick={this.doneItem}>Done</button>
        <button className="btn btn-outline-danger float-right" id={this.props.item.id} onClick={this.remove}>Remove
        </button>
      </li>
    )
  }
}
