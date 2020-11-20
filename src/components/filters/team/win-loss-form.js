import React from 'react';
import {Component} from 'react';

class WinLossForm extends Component{

    constructor(props){
     
      super(props);
      this.props = props;

      this.state = {
        awayWin : 0,
        homeWin : 0
      }
     this.onChangeHandlerAwayWin = this.onChangeHandlerAwayWin.bind(this);
     this.onChangeHandlerHomeWin = this.onChangeHandlerHomeWin.bind(this);
    }

    onChangeHandlerAwayWin(event){
      this.setState({
        awayWin : event.target.value,
        homeWin : this.state.homeWin
      })
      console.log(this.state.awayWin + " " + this.state.homeWin);
    }

    onChangeHandlerHomeWin(event){
      this.setState({
        awayWin : this.state.awayWin,
        homeWin : event.target.value
      })
      console.log(this.state.awayWin + " " + this.state.homeWin);
    }


    render(){
     return (
      <div>

      <div>
      <label>
        Max Away Win Percentage
       <input onChange={this.onChangeHandlerAwayWin} value={this.state.awayWin} type="range" ></input>
      </label>
      </div>

      <div>
      <label>
        Max Home Win Percentage
       <input onChange={this.onChangeHandlerHomeWin} value={this.state.homeWin} type="range" ></input>
      </label>
      </div>
      
      
      <button onClick={() => this.props.applyWinLossHandler(this.state)} >Apply</button>
     </div>
     )
    }
  
  }
  

export default WinLossForm;