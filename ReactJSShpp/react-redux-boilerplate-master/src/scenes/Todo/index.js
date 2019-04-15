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

  doneItem(id) {
    const newItems = this.state.list.reduce((acc, item) => {
      if(item.id === id) {
        item.flag = !item.flag;
      }
      acc = item;
      return acc;
    },[]);
    console.log(newItems)
    // this.changeStateList(newItems);
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
    console.log("currentState", this.state.text);
    this.setState(() => {
      return {text: text}
    }, () => console.log("updateState", this.state.text));
  }

  handleAddToList() {
    console.log("current State add to list", this.state.list);
    if (this.state.text.trim().length === 0) {
      console.log("error, write the text.");
      return;
    }
    const newList = [...this.state.list];
    newList.push({text: this.state.text, flag: false, id: this.generatorUniqueId()});
    console.log(newList);
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
      />
    )
  }
}
