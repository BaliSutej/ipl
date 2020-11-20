import React from 'react';
import {Component} from 'react';

class Category extends Component{

    constructor(props){
     
      super(props);
      this.props = props;

    }


    render(){

      const selectStyle = {
        height : " 30px",
        width : "30%",
        textAlign:"center",
        alignContent :"center"
      }

      return(
        <div className="cate">
          
          <select style={selectStyle}  value = {this.props.stateVal} onChange={(e) => this.props.handleChange(e)}  >
            <option>Player</option>
            <option>Venue</option>
            <option>Owner</option>
            <option>Team</option>
            <option >No Filters</option>
          </select>
        </div>
      )
    }
  
  }
  

export default Category;












