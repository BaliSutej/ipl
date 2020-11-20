import React from 'react';
import {Component} from 'react';

class HomeAwayForm extends Component{

    constructor(props){
     
      super(props);
      this.props = props;

      this.state = {
        awayWin : 0,
        homeWin : 0
      }
     this.onChangeHandlerAwayPlayed = this.onChangeHandlerAwayPlayed.bind(this);
     this.onChangeHandlerHomePlayed = this.onChangeHandlerHomePlayed.bind(this);

     
    }

    onChangeHandlerAwayPlayed(event){
        this.setState({
          awayWin : event.target.value,
          homeWin : this.state.homeWin
        })
        console.log(this.state.awayWin + " " + this.state.homeWin);
      }
  
      onChangeHandlerHomePlayed(event){
        this.setState({
          awayWin : this.state.awayWin,
          homeWin : event.target.value
        })
        console.log(this.state.awayWin + " " + this.state.homeWin);
      }


    

    render(){
     return(
        <div>
          <div>
          <label>
          Max Away Played
         <input min ="0"  max = "50" onChange={this.onChangeHandlerAwayPlayed} value={this.state.awayWin} type="range" ></input>
        </label>
          </div>
          <div>
          <label>
          Max Home Played
         <input onChange={this.onChangeHandlerHomePlayed} value={this.state.homeWin} type="range" ></input>
        </label>
          </div>
        
        
        <button onClick={() => this.props.applyHomeAwayHandler(this.state)} >Apply</button>
       </div>
     )
    }
  
  }
  

export default HomeAwayForm;