import React from "react";
import ReactDOM from "react-dom";
const chess = require('./ChessBuilds.js') // Added Chess builds
// Initiate tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
//

class Main extends React.Component {
  render() {
    return (
    <React.Fragment>
      <NavBar/>
      <SelectBuild/>
    </React.Fragment>
    )
    ;
  }
}

class NavBar extends React.Component {
  render() {
    return (
    <nav className="navbar navbar-dark bg-dark justify-content-center">
      <h2 className="text-white">Underlords Chess Builds</h2>
    </nav>
    )
    ;
  }
}

class SelectBuild extends React.Component {
  render() {
    return (
      <div className="container pt-5">
        <div className="row">
        { 
          Object.entries(chess).map((obj, index) => (
            <Build key={index} obj={obj} index={index}/>
        ))}
        </div>
      </div>
    )
    ;
  }
}

class Build extends React.Component {
  render() {
    // console.log(this.props.obj[0]);
    return (
      <div className="p-2">
        <div data-toggle="tooltip" data-placement="top" title={this.props.obj[1].listSynergies()} className="build-btn btn border border-primary d-flex align-items-center justify-content-center">
          <img className="build-btn build-btn-img" src={`/src/img/${this.props.obj[0]}.png`}></img>
          <span className="badge text-white">{this.props.obj[1].name}</span>
        </div>
      </div>
    )
    ;
  }
}


//Create footer later
ReactDOM.render(<Main/>, document.getElementById("react"));