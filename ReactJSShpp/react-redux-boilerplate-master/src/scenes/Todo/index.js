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
    this.editItem = this.editItem.bind(this);
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
    this.addOrChangeToLocalStorage(newList);
    this.setState(() => {
      return {list: newList}
    }, () => console.log('test'));
  }

  addOrChangeToLocalStorage(newList) {
    localStorage.setItem('todo', JSON.stringify(newList));
  }

  generatorUniqueId() {
    return "id" + Math.random().toString(16).slice(2);
  }

  deleteResolved() {
    const tempList = [...this.state.list];
    const newItems = tempList.filter(item => item.flag !== true);
    this.changeStateList(newItems);
  }

  sortResolved() {
    const newItems = this.deepCopy(this.state.list);
    newItems.sort(function (a, b) {
      return a.flag - b.flag;
    });
    this.changeStateList(newItems);
  }

  sortDone() {
    const newItems = this.deepCopy(this.state.list);
    newItems.sort(function (a, b) {
      return b.flag - a.flag;
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

  editItem(id) {
    const tmpItems = [...this.state.list];
    const isEditItem = tmpItems.map((item) => {
      if (item.id === id) {
        item.text = this.state.text;
      }
      return item;
    });
    this.changeStateList(isEditItem);
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
    console.log("render");
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
        onEditItem={this.editItem}
      />
    )
  }

  deepCopy(cloneableData) {
    let clonedData;
    if (cloneableData instanceof Object) {
      if (Array.isArray(cloneableData)) {
        clonedData = [];
      } else {
        clonedData = {};
      }
      for (let key in cloneableData) {
        clonedData[key] = this.deepCopy(cloneableData[key]);
      }
    } else {
      clonedData = cloneableData;
    }
    return clonedData;
  }
}


