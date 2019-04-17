import React, {Component} from 'react';
import MainComponent from "./components";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      list: []
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleAddToList = this.handleAddToList.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.doneItem = this.doneItem.bind(this);
    this.sortDone = this.sortDone.bind(this);
    this.sortResolved = this.sortResolved.bind(this);
    this.deleteResolved = this.deleteResolved.bind(this);
    this.selectAllItem = this.selectAllItem.bind(this);
    this.dbClickItem = this.dbClickItem.bind(this);
  }

  componentWillMount() {
    if (localStorage.getItem('todo') !== null) {
      this.setState(
        () => {
          return {list: JSON.parse(localStorage.getItem('todo'))}
        }
      )
    }
  }

  changeStateList(newList) {
    this.setState(() => {
      return {list: newList}
    }, () => this.addOrChangeToLocalStorage());
  }

  addOrChangeToLocalStorage() {
    localStorage.setItem('todo', JSON.stringify(this.state.list));
  }

  generatorUniqueId() {
    return "id" + Math.random().toString(16).slice(2);
  }

  dbClickItem() {
    console.log("click dbClick")
  }

  selectAllItem() {
    const tempList = [...this.state.list];
    const newItems = tempList.map(item => {
      item.flag = true;
      return item;
    });
    this.changeStateList(newItems);
  }

  deleteResolved() {
    const tempList = [...this.state.list];
    const newItems = tempList.filter(item => item.flag !== true);
    this.changeStateList(newItems);
  }

  sortResolved() {
    const newItems = [...this.state.list];
    newItems.sort(function (a, b) {
      return a.flag - b.flag;
    });
    this.changeStateList(newItems);
  }

  sortDone() {
    const newItems = [...this.state.list];
    newItems.sort(function (a, b) {
      return b.flag - a.flag
    });
    this.changeStateList(newItems);
  }

  doneItem(id) {
    const newItems = this.state.list.reduce((acc, item) => {
      if (item.id === id) {
        item.flag = !item.flag;
      }
      acc.push(item);
      return acc;
    }, []);
    this.changeStateList(newItems);
  }

  removeItem(id) {
    const newItem = this.state.list.filter(item => {
      if (item.id !== id) {
        return item
      }
    });
    this.changeStateList(newItem);
  }

  handleKeyPress(text) {
    this.setState(() => {
      return {text: text}
    });
  }

  handleAddToList() {
    if (this.state.text.trim().length === 0) {
      return;
    }
    const newList = [...this.state.list];
    newList.push({text: this.state.text, flag: false, id: this.generatorUniqueId()});
    document.getElementById("input").value = "";
    this.setState(() => {
      return {list: newList}
    }, () => this.addOrChangeToLocalStorage());
  }

  render() {
    return (
      <MainComponent
        onKeyPress={this.handleKeyPress}
        onAddItem={this.handleAddToList}
        text={this.state.text}
        list={this.state.list}
        onGeneratorUniqueId={this.generatorUniqueId}
        onRemoveItem={this.removeItem}
        onDoneItem={this.doneItem}
        onSortDone={this.sortDone}
        onSortResolved={this.sortResolved}
        onDeleteResolved={this.deleteResolved}
        onSelectAllItem={this.selectAllItem}
        onDbClickItem={this.dbClickItem}
      />
    )
  }
}
