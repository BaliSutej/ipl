import React from 'react';
import {Component} from 'react';

class DOBForm extends Component{

    constructor(props){
     
      super(props);
      this.props = props;
    
      this.onDate = this.onDate.bind(this);
      
    }

    onDate(e){
        this.props.dateChangeHandler(e);
    }



    

    render(){
     
        return(
            <div>
                <input onChange={this.onDate} value = {this.props.dob} type="date" ></input>
            </div>
        )
    }
  
  }
  

export default DOBForm;