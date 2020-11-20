import React from 'react';
import {Component} from 'react';
import OwnerForm from './owner-form';

class OwnerFilter extends Component{

  constructor(props){
     
    super(props);
    this.props = props;
    this.state = {
      opt: "",
      teamFilter: ""
    }

    this.clickHandler = this.clickHandler.bind(this);
    this.applyHandler = this.applyHandler.bind(this);
  }

  clickHandler(e){
    console.log(e.target.innerHTML);
    this.setState({
      opt : e.target.innerHTML,
      teamFilter : this.state.teamFilter
    });
  }

  applyHandler(str){
    this.setState({
      opt : this.state.opt,
      teamFilter : str
    })
  }


  render(){

    let dispComp ="";
    if(this.state.opt === "Team"){
      dispComp = <OwnerForm applyHandler={this.applyHandler}/>
    }

  
    const subFilter1Style = {
      padding : "5px",
      width : "50%",
      backgroundColor:"#0080FF",
      height : "80vh"
    }

    return(
      <div className="ofilter">
        <div style={subFilter1Style}>
        <div>
            <button onClick={this.clickHandler} >Team</button>
        </div>
        <div>
            {dispComp}
        </div>
        </div>
        
      </div>
    )
  }

}

export default OwnerFilter;