import React from 'react';
import {Component} from 'react';

class BowlingForm extends Component{

    constructor(props){
     
      super(props);
      this.props = props;
      this.onBowling = this.onBowling.bind(this);
      
    }

    onBowling(e){
        this.props.bowlingChangeHandler(e);
    }

    render(){
     
        return(
            <div>
                <select onChange={this.onBowling} value={this.props.bowling}>
                    <option>Left-arm-medium-fast</option>
                    <option>Left-arm-medium</option>
                    <option>Left-arm-medium-slow</option>
                    <option>Right-arm-leg-break</option>
                    <option>Right-arm-off-break</option>
                    <option>Right-arm-medium-fast</option>
                    <option>Right-arm-medium</option>
                    <option>Right-arm-medium-slow</option>
                    <option>None</option>
                </select>
            </div>
        )
    }
  }
  

export default BowlingForm;