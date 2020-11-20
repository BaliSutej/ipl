import React from 'react';
import {Component} from 'react';

class Search extends Component{

    constructor(props){
     
      super(props);
      this.props = props;

    }


    render(){

      const barStyle = {height : "40px",
      width : "50%",
      border : "1px"
    }

      return(
        <div style={{}} className="search">
          <input style={ barStyle } type="text" placeHolder="Search"></input>
        </div>
      )
    }
  
  }
  

export default Search;