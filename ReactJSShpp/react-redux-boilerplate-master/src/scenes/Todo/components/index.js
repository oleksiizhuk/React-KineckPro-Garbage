import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Button from './Button';
import ItemLi from './ItemLi';
import FeedBack from './FeedBack';
import SortButton from './SortButton'

export default class Main extends Component {

  static propTypes = {
    list: PropTypes.array,
    text: PropTypes.string,
    onKeyPress: PropTypes.func,
    onAddItem: PropTypes.func,
    onGeneratorUniqueId: PropTypes.func,
    onRemoveItem: PropTypes.func,
    onDoneItem: PropTypes.func,
    onSortDone: PropTypes.func,
    onSortResolved: PropTypes.func,
    onDeleteResolved: PropTypes.func,
    onSelectAllItem: PropTypes.func,
    onDbClickItem: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleAddToList = this.handleAddToList.bind(this);
    this.generatorUniqueId = this.generatorUniqueId.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.doneItem = this.doneItem.bind(this);
    this.sortDone = this.sortDone.bind(this);
    this.sortResolved = this.sortResolved.bind(this);
    this.deleteResolved = this.deleteResolved.bind(this);
    this.selectAllItem = this.selectAllItem.bind(this);
    this.dbClickItem = this.dbClickItem.bind(this);
  }

  dbClickItem() {
    this.props.onDbClickItem();
  }

  selectAllItem() {
    this.props.onSelectAllItem();
  }

  deleteResolved() {
    this.props.onDeleteResolved();
  }

  sortResolved() {
    this.props.onSortResolved();
  }

  sortDone() {
    this.props.onSortDone();
  }

  doneItem(id) {
    this.props.onDoneItem(id);
  }

  removeItem(id) {
    this.props.onRemoveItem(id);
  }

  generatorUniqueId() {
    this.props.onGeneratorUniqueId();
  }

  handleKeyPress(text) {
    this.props.onKeyPress(text);
  }

  handleAddToList() {
    this.props.onAddItem();
  }

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
                        <SortButton id={'selectAll'} classN={'btn btn-outline-primary'} html={'Select All'}
                                    onFunc={this.selectAllItem}/>
                    </span>
              </div>
              <Input onKeyPress={this.handleKeyPress} onEnterPress={this.handleAddToList}/>
              <div className="input-group-prepend">
                    <span className="addItem">
                        {/*<button>Add Item</button>*/}
                      <Button onClick={this.handleAddToList}/>
                    </span>
              </div>
            </div>
            <div className="actionPanel2">
              <div className="btn-group btn-block">
                <SortButton id={"doneAction"} classN={"btn btn-success"} html={'Sort Done'}
                            onFunc={this.sortDone}/>
                <SortButton id={"restoreAction"} classN={"btn btn-info"} html={'Sort Resore'}
                            onFunc={this.sortResolved}/>
                <SortButton id={"removeAction"} classN={"btn btn-danger"} html={'Delete all resolved todos'}
                            onFunc={this.deleteResolved}/>
              </div>
            </div>
          </div>

          <ul className="list-group list-group-flush" id="list">
            {this.props.list.map((item, index) => {
              return (
                <ItemLi
                  item={item}
                  key={item + index}
                  onRemove={this.removeItem}
                  onDoneItem={this.doneItem}
                  onDbClickItem={this.dbClickItem}
                />
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}
