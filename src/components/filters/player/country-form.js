import React from 'react';
import {Component} from 'react';

class CountryForm extends Component{

    constructor(props){
     
      super(props);
      this.props = props;
      this.onCountry = this.onCountry.bind(this);
      
    }

    onCountry(e){
        this.props.countryChangeHandler(e);
    }

    render(){
     
        return(
            <div>
                <select onChange={this.onCountry} value={this.props.country}>
                    <option>India</option>
                    <option>Australia</option>
                    <option>South Africa</option>
                    <option>Other</option>
                    <option>All</option>
                </select>
            </div>
        )
    }
  }
  

export default CountryForm;