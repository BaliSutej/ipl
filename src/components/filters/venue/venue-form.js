import React from 'react';
import {Component} from 'react';

class VenueForm extends Component{

    constructor(props){
     
      super(props);
      this.props = props;

      this.state = {
          team1 : "Any",
          team2 : "Any"
      }

      this.clickHandler1 = this.clickHandler1.bind(this);
      this.clickHandler2 = this.clickHandler2.bind(this);
    }


    clickHandler1(e){
        this.setState({
            team1: e.target.value,
            team2 : this.state.team2
        })
    }

    clickHandler2(e){
      this.setState({
          team1 : this.state.team1,
          team2 : e.target.value
      })
  }

    render(){
      return(
        <div className="dForm">
              <label>
                  Team1: 
                  <select onChange={this.clickHandler1} value={this.state.team1}>
                    <option>RCB</option>
                    <option>PNJ</option>
                    <option>MI</option>
                    <option>RR</option>
                    <option>CSK</option>
                    <option>KKR</option>
                    <option>SRH</option>
                    <option>DC</option>
                    <option>Any</option>
                  </select>
              </label>
              <label>
                  Team2: 
                  <select onChange={this.clickHandler2} value={this.state.team2}>
                    <option>RCB</option>
                    <option>PNJ</option>
                    <option>MI</option>
                    <option>RR</option>
                    <option>CSK</option>
                    <option>KKR</option>
                    <option>SRH</option>
                    <option>DC</option>
                    <option>Any</option>
                  </select>
              </label>
              <label>
                <button onClick={ () => this.props.applyHandler(this.state)}>Apply</button> 
              </label>
          
        </div>
      )
    }
  
  }
  

export default VenueForm;