import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Button from './Button';
import ItemLi from './ItemLi';
import FeedBack from './FeedBack'

export default class Main extends Component {

  static propTypes = {
    list: PropTypes.array,
    text: PropTypes.string,
    onKeyPress: PropTypes.func,
    onAddItem: PropTypes.func,
    onGeneratorUniqueId: PropTypes.func,
    onRemoveItem: PropTypes.func
  };

  constructor(props) {
    super(props);
    console.log(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleAddToList = this.handleAddToList.bind(this);
    this.generatorUniqueId = this.generatorUniqueId.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  removeItem() {
    this.props.onRemoveItem();
  }

  generatorUniqueId() {
    this.props.onGeneratorUniqueId();
  }

  handleKeyPress(text) {
    this.props.onKeyPress(text);
  };

  handleAddToList() {
    this.props.onAddItem();
  };

  render() {
    return (

      <div className="container">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Todo application</h4>
          </div>
          <div className="card-body">
            <FeedBack/>
            <div className="input-group" id="actionPanel">
              <div className="input-group-prepend">
                    <span className="selectAllAction">
                        <button className="btn btn-outline-primary" type="button"
                                id="selectAllButton">Select all</button>
                    </span>
              </div>
              <Input onKeyPress={this.handleKeyPress}/>
              <div className="input-group-prepend">
                    <span className="addItem">
                        {/*<button>Add Item</button>*/}
                      <Button onClick={this.handleAddToList}/>
                    </span>
              </div>
            </div>
            <div className="actionPanel2">
              <div className="btn-group btn-block">
                <button className="btn btn-success" id="doneAction">Sort Done</button>
                <button className="btn btn-info" id="restoreAction">Sort Resore</button>
                <button className="btn btn-danger" id="removeAction"> Delete all resolved todos</button>
              </div>
            </div>
          </div>

          <ul className="list-group list-group-flush" id="list">
            {this.props.list.map((item, index) => {
              return (
                <ItemLi item={item} key={item + index}/>
              )
            })}

          </ul>

        </div>
      </div>
    )
  }
}
