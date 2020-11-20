
import './App.css';
import { Component } from 'react';
import Search from './components/search';
import Category from './components/category';
import VenueFilter from './components/filters/venue/venue-filter';
import TeamFilter from './components/filters/team/team-filter';
import OwnerFilter from './components/filters/owner/owner-filter';
import PlayerFilter from './components/filters/player/player-filter';
import DummyFilter from './components/filters/dummy';


class App extends Component{


  constructor(props){
    super(props);
    this.state = {
      category : "No Filters" 
    };
     
   
    this.handleChange = this.handleChange.bind(this);

  }


  handleChange(event){
    this.setState({
      category: event.target.value
    });

  }

  render(){

    let filter = <DummyFilter/>;
    if(this.state.category === "Team"){
      filter = <TeamFilter/>;
    }else if(this.state.category === "Venue"){
      filter = <VenueFilter/>;
    }else if(this.state.category === "Player"){
      filter = <PlayerFilter/>;
    }else if(this.state.category === "Owner"){
      filter = <OwnerFilter/>;
    }else{
      filter = <DummyFilter/>;
    }

    const searchStyle = {
      padding: "3px",
      height: "40px"
    }

    const catStyle = {
      padding: "3px",
      height: "40px"
    }

    return(
      <div  className="App">
        <div style={{backgroundColor : "#003152", padding:"10px"}} >
          <div style={searchStyle} >
            <Search />
          </div>
          <div style={catStyle}>
            <Category  stateVal={this.state.category} handleChange={this.handleChange} /> 
          </div>
        </div>

        <div >
          {filter}
        </div> 
        
      </div>
    )
  }

}


export default App;
