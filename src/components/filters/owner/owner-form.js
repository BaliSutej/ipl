import React from 'react';
import {Component} from 'react';

class OwnerForm extends Component{

    constructor(props){
     
      super(props);
      this.props = props;

      this.state = {
          team : "All"
      }

      this.clickHandler = this.clickHandler.bind(this);
    }


    clickHandler(e){
        this.setState({
            team: e.target.value
        })
    }

    render(){
      return(
        <div className="dForm">
              <label>
                  Team : 
                  <select onChange={this.clickHandler} value={this.state.team}>
                    <option>RCB</option>
                    <option>PNJ</option>
                    <option>MI</option>
                    <option>RR</option>
                    <option>CSK</option>
                    <option>KKR</option>
                    <option>SRH</option>
                    <option>DC</option>
                    <option>All</option>
                  </select>
              </label>
              <label>
                <button onClick={ () => this.props.applyHandler(this.state.team)}>Apply</button> 
              </label>
          
        </div>
      )
    }
  
  }
  

export default OwnerForm;