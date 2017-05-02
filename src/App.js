import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'
import Header from './Header';
import soccerTeamsFile from './data/soccerTeams.json'
import './css/App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      soccerTeam: '',
      soccerTeams: {}
    }
    this.loadSamples = this.loadSamples.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount(){
      {this.loadSamples()}
  }

  loadSamples(){
    this.setState({
      soccerTeams: soccerTeamsFile.soccerTeams
    })
  }

  handleSubmit(event){
    event.preventDefault()
    console.log(this.state.soccerTeam)
  }

  render() {
    let soccerTeam = this.state.soccerTeam
    return (
      <div className='App' onSubmit={this.handleSubmit} >
      <form className='frmSoccerTeam' onSubmit={this.handleSubmit} >
        <Header />
         <select value={this.state.soccerTeam} onChange={(e)=>{this.setState({soccerTeam: e.target.value})}}>
            <option value='Select Soccer Team'>Select Soccer Team</option>
              {
                  Object.keys(this.state.soccerTeams).map((i)=>{
                      return <option key={i} value={this.state.soccerTeams[i].team}>{this.state.soccerTeams[i].team}</option>
                  })
              }
        </select>
        <Link 
        className='btn' to={{
          pathname: '/soccerTeam', 
          search: `?futbolClub=` + soccerTeam,
          }}>
          <button className="button" type='submit' disabled={!this.state.soccerTeam}>Submit</button>
        </Link>
      </form>
      </div>
    );
  }
}

export default App;
