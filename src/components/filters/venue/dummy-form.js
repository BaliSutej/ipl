import React from 'react';
import {Component} from 'react';

class DummyForm extends Component{

    constructor(props){
     
      super(props);
      this.props = props;

    }


    render(){
      return(
        <div className="dForm">
          <form>
              <label>
                  Name : 
                  <input type="text"></input>
              </label>
          </form>
        </div>
      )
    }
  
  }
  

export default DummyForm;