import React from 'react';
import {Component} from 'react';

class BattingForm extends Component{

    constructor(props){
     
      super(props);
      this.props = props;

      this.state = this.props.batting;

        this.srChange = this.srChange.bind(this);
        this.runChange = this.runChange.bind(this);
        this.outChange = this.outChange.bind(this);
        this.avgChange = this.avgChange.bind(this);
        this.batChange = this.batChange.bind(this);
     
    }


   


    srChange(e){

        this.setState({
            strikeRate : e.target.value,
            runs : this.state.runs,
            average : this.state.average,
            out : this.state.out,
            battingType : this.state.battingType
          });

    }

    runChange(e){
        this.setState({
            strikeRate : this.state.strikeRate,
            runs : e.target.value,
            average : this.state.average,
            out : this.state.out,
            battingType : this.state.battingType
          });
    }

    outChange(e){
        this.setState({
            strikeRate : this.state.strikeRate,
            runs : this.state.runs,
            average : this.state.average,
            out : e.target.value,
            battingType : this.state.battingType
          });
    }

    avgChange(e){
        this.setState({
            strikeRate : this.state.strikeRate,
            runs : this.state.runs,
            average : e.target.value,
            out : this.state.out,
            battingType : this.state.battingType
          });
    }

    batChange(e){
        this.setState({
            strikeRate : this.state.strikeRate,
            runs : this.state.runs,
            average : this.state.average,
            out : this.state.out,
            battingType : e.target.value
          });
    }
    

    render(){
     
        return(
            <div>
                <div>
                <label>Max Strike Rate
                    <input onChange={this.srChange} value={this.state.strikeRate} type ="range" min="0" max="600"></input>
                </label>
                </div>
                <label>Runs
                    <input onChange={this.runChange} value={this.state.runs} type = "range" min="0" max="30000"></input>
                </label>
                <div>
                <label>Average
                    <input onChange={this.avgChange} value={this.state.average} type ="range" min="0" max="200"></input>
                </label>
                </div>
                <label>Out
                    <input onChange={this.outChange} value={this.state.out} type="range" min="0" max="300"></input>
                </label>
                <div>
                <label>
                    batting Type
                    <select onChange={this.batChange} value={this.state.battingType} >
                        <option>Left Hand</option>
                        <option>Right Hand</option>
                    </select>
                </label>
                </div>
                
                
                <button onClick={() => this.props.battingChangeHandler(this.state)} >Apply</button>
                
            </div>
        )
    }
  
  }
  

export default BattingForm;