import React from 'react';
import {Component} from 'react';
import VenueForm from './venue-form';

class VenueFilter extends Component{

    constructor(props){
     
      super(props);
      this.props = props;
      this.state = {
        opt: "",
        team1Filter: "",
        team2Filter: ""
      }

      this.clickHandler = this.clickHandler.bind(this);
      this.applyHandler = this.applyHandler.bind(this);
    }

    clickHandler(e){
      console.log(e.target.innerHTML);
      this.setState({
        opt : e.target.innerHTML,
        team1Filter : this.state.team1Filter,
        team2Filter : this.state.team2Filter
      });
    }

    applyHandler(str){
      this.setState({
        opt : this.state.opt,
        team1Filter : str.team1,
        team2Filter : str.team2
      })
    }


    render(){

      let dispComp ="";
      if(this.state.opt == "Team"){
        dispComp = <VenueForm applyHandler={this.applyHandler}/>
      }

      const subFilter1Style = {
        padding : "5px",
        width : "50%",
        backgroundColor:"#0080FF",
        height : "80vh"
      }

      return(
        <div className="vfilter">
          <div style={subFilter1Style}>
          <div>
              <button onClick={this.clickHandler} >Team</button>
          </div>
          <div>
              {dispComp}
          </div>
          <div>

          </div>
          </div>
        </div>
      )
    }
  
  }
  

export default VenueFilter;