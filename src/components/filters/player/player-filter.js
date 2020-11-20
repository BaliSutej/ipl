import React from 'react';
import {Component} from 'react';
import DOBForm from './dob-form';
import BowlingForm from './bowling-form';
import CountryForm from './country-form';
import BattingForm from './batting-form';

class PlayerFilter extends Component{

    constructor(props){
     
      super(props);
      this.props = props;
      this.state = {
        opt:"",
        dob: "default",
        country : "All",
        bowling : "None",
        batting : "None"
      }

      this.clickPlayerHandler = this.clickPlayerHandler.bind(this);
      this.dateChangeHandler = this.dateChangeHandler.bind(this);
      this.countryChangeHandler = this.countryChangeHandler.bind(this);
      this.bowlingChangeHandler = this.bowlingChangeHandler.bind(this);
      this.battingChangeHandler = this.battingChangeHandler.bind(this);
    }

    clickPlayerHandler(e){
      this.setState({
        opt: e.target.innerHTML,
        dob : this.state.dob,
        country : this.state.country,
        bowling : this.state.bowling,
        batting : this.state.batting
      });
    }
    
    dateChangeHandler(e){
     // console.log(e.target.value);
      this.setState({
        opt: this.state.opt,
        dob: e.target.value,
        country : this.state.country,
        bowling : this.state.bowling,
        batting : this.state.batting

      });
     // console.log("hey");
    }

    countryChangeHandler(e){
      this.setState({
        opt: this.state.opt,
        dob: this.state.dob,
        country : e.target.value,
        bowling : this.state.bowling,
        batting : this.state.batting
      });
      //console.log(this.state);
    }

    bowlingChangeHandler(e){
      this.setState({
        opt: this.state.opt,
        dob: this.state.dob,
        country : this.state.country,
        bowling : e.target.value,
        batting : this.state.batting
      });
      console.log(this.state);
    }

    battingChangeHandler(str){
      this.setState({
        opt: this.state.opt,
        dob: this.state.dob,
        country : this.state.country,
        bowling : this.state.bowling,
        batting : str
      });
     
      console.log(this.state.batting);
    }

    render(){

      let dispOut;

      const subFilter1Style = {
        padding : "5px",
        width : "50%",
        backgroundColor:"#0080FF",
        height : "80vh"
      }

      if(this.state.opt === "DOB"){
        dispOut = <DOBForm dateChangeHandler={this.dateChangeHandler} dob={this.state.dob} />
      }else if(this.state.opt === "Batting"){
        dispOut = <BattingForm battingChangeHandler={this.battingChangeHandler} batting={this.state.batting} />
      }else if(this.state.opt === "Bowling"){
        dispOut = <BowlingForm bowlingChangeHandler={this.bowlingChangeHandler} bowling={this.state.bowling} />
      }else if(this.state.opt === "Country"){
        dispOut = <CountryForm countryChangeHandler={this.countryChangeHandler} country={this.state.country} />
      }

      return(
        <div className="vfilter">
          <div style={subFilter1Style}>
          <div>
            <button onClick={this.clickPlayerHandler}>DOB</button>
            <button onClick={this.clickPlayerHandler}>Batting</button>
            <button onClick={this.clickPlayerHandler}>Bowling</button>
            <button onClick={this.clickPlayerHandler}>Country</button>
          </div>
          <div>
            {dispOut}
          </div>
          </div>
        </div>
      )
    }
  
  }
  

export default PlayerFilter;