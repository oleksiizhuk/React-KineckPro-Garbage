import React, {Component} from 'react';
import MainComponent from "./components";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      list: []
    };

    this.getLocalStorage();
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleAddToList = this.handleAddToList.bind(this);
  }


  getLocalStorage() {
    if (localStorage.getItem('todo') !== null) {
      this.state.list = JSON.parse(localStorage.getItem('todo'));
    }
    console.log(this.state.list);
  };

  addAndChangeToLocalStorage() {
    localStorage.setItem('todo', JSON.stringify(this.state.list));
  }

  generatorUniqueId() {
    return "id" + Math.random().toString(16).slice(2);
  }
  removeItem(){
    const id = e.target.id;
    document.getElementById(id).remove();
    const newItem = this.state.list.filter((item,index) => {
        console.log(item);
        if(item.id !== id) {
          return item
        }
    });
    console.log(newItem);
  }

  handleKeyPress(text) {
    console.log("currentState", this.state.text);
    this.setState(() => {
      return {text: text}
    }, () => console.log("updatetState", this.state.text));
  };

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
    }, () => this.addAndChangeToLocalStorage());
  };

  render() {
    return (
      <MainComponent
        onKeyPress={this.handleKeyPress}
        onAddItem={this.handleAddToList}
        text={this.state.text}
        list={this.state.list}
        generatorUniqueId={this.generatorUniqueId}
        removeItem={this.removeItem()}
      />
    )
  }
}
