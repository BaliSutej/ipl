import React from 'react';
import {Component} from 'react';
import WinLossForm from './win-loss-form';
import HomeAwayForm from './home-away-form';

class TeamFilter extends Component{

    constructor(props){
     
      super(props);
      this.props = props;
      this.state = {
        opt: "",
        homeWin : null,
        awayWin : null,
        homePlayed : null,
        awayPlayed : null
      }

      this.teamClickHandler = this.teamClickHandler.bind(this);
      this.applyHomeAwayHandler = this.applyHomeAwayHandler.bind(this);
      this.applyWinLossHandler = this.applyWinLossHandler.bind(this);
    }

    teamClickHandler(e){
      console.log(e.target.innerHTML);
      this.setState({
        opt : e.target.innerHTML
      });
    }

    applyHomeAwayHandler(res){
      this.setState({
        opt : this.state.opt,
        homePlayed : res.homeWin,
        awayPlayed : res.awayWin,
        homeWin: this.state.homeWin,
        awayWin : this.state.awayWin
      });
      console.log(this.state);
    }

    applyWinLossHandler(res){
      this.setState({
        opt : this.state.opt,
        homePlayed : this.state.homePlayed,
        awayPlayed : this.state.awayPlayed,
        homeWin: res.homeWin,
        awayWin : res.awayWin
      });
      console.log(this.state);
    }

    

    render(){

      const subFilter1Style = {
        padding : "5px",
        width : "50%",
        backgroundColor: "#0080FF",
        height : "80vh"
      }

      let dispout;

      if(this.state.opt === "Win Ratio"){
        dispout = <WinLossForm applyWinLossHandler={this.applyWinLossHandler} />
      }else if(this.state.opt === "Home Away Matches"){
        dispout = <HomeAwayForm applyHomeAwayHandler={this.applyHomeAwayHandler} />
      }


      return(
        <div className="vfilter">
          <div style={subFilter1Style}>
          <div>
            <button onClick={this.teamClickHandler}>Win Ratio</button>
            <button onClick={this.teamClickHandler}>Home Away Matches</button>
          </div>
          <div>
            {dispout}
          </div>
          </div>
          <div>
            
          </div>
        </div>
      )
    }
  
  }
  

export default TeamFilter;