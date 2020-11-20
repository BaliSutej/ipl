import React from 'react';
import {Component} from 'react';


class DummyFilter extends Component{


  constructor(props){
    super(props);
    this.props = props;

  }
  

  render(){

    const subFilter1Style = {
      padding : "5px",
      width : "50%",
      backgroundColor:"#0080FF",
      float:"left",
      height:"80vw"
    }

    return(
      <div>
        <div style={subFilter1Style}>
        <h4>No Filters Selected</h4>
        </div>
        <div style={{width:"48%", float:"left"}}>
            required data
        </div>
      </div>
    )

  }




    // constructor(props){
     
    //   super(props);
    //   this.props = props;

    //   this.state = {
    //     opt : ""
    //   }

    //   this.clickHandler = this.clickHandler.bind(this);

    // };

    // clickHandler(e){
    //   console.log(e.target.innerHTML);
    //   this.setState({
    //     opt : e.target.innerHTML
    //   });
    // }

    // render(){

    //   let dispOpt = "" ;
    //   if(this.state.opt == "bowl"){
    //     dispOpt = <DummyForm/>;
        
    //   }else if(this.state.opt == "bat"){
    //     dispOpt = <h1>Bat Choosen</h1>;
    //   }else if(this.state.opt == "field"){
    //     dispOpt = <h1>Field Choosen</h1>;
    //   }else if(this.state.opt == "wicket"){
    //     dispOpt = <h1>Wicket Choosen</h1>;
    //   }

    //   return(
    //     <div className="vfilter">
    //       <div>
    //         <button onClick = {this.clickHandler}>bowl</button>
    //         <button onClick = {this.clickHandler}>bat</button>
    //         <button onClick = {this.clickHandler}>field</button>
    //         <button onClick = {this.clickHandler}>wicket</button>
    //       </div>
    //       <div>
    //           {dispOpt}
    //       </div>
    //     </div>
    //   )
    // }
  
  }
  

export default DummyFilter;