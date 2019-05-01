import React, {Component} from 'react';


export default class Slider extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="slider" className="slider">
        <div className="slider-current">
          <img alt="0"/>
        </div>
        <ul className="slider-previews">

        </ul>
      </div>
    )
  }
}
