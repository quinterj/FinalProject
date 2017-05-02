import React, { Component } from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import Img from 'react-image'
import soccerTeamsFile from './data/soccerTeams.json'
import './css/SoccerTeam.css'

const queryString = require('query-string');

function getSoccerTeam(objJSON, soccerTeam) {
  for(var i = 0; i < objJSON.length; i++) {
    if(objJSON[i].team === soccerTeam) {
      return objJSON[i]
    }
  }
}

class SoccerTeam extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        objSoccerTeam: {}
    };   
}

componentWillMount(){
  let soccerTeam = '';
  let objJSON = soccerTeamsFile.soccerTeams;
  const parsed = queryString.parse(location.search);
  {
    Object.keys(parsed)
    .map( key => { soccerTeam = parsed[key]})
  } 
  this.setState({
    objSoccerTeam: getSoccerTeam(objJSON, soccerTeam),
  })
}

render(){
   return( 
    <div className="SoccerTeam">
      <ul className="title">Team: {this.state.objSoccerTeam.team}</ul>
      <ul className="title">Top Goal Scorer: {this.state.objSoccerTeam.topGoalScorer}</ul>
      <ul><Video controls={['PlayPause', 'Seek']} autoPlay ref="video">
          <source src={require(this.state.objSoccerTeam.video)} type="video/mp4" />
      </Video></ul>
    </div>
   );
  }
}

export default SoccerTeam;