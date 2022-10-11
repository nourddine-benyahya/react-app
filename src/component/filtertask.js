import React from "react";
import { Component } from "react";
import "./style.css";
class Filtertask extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="filter">
                <button type="button" className="btn btn-outline-info" onClick={this.props.all}>all</button>
                <button className="btn btn-outline-info" onClick={this.props.termine}>terminer</button>
                <button className="btn btn-outline-info" onClick={this.props.encour}>en cours</button>
            </div>
        )
    }
}
export default Filtertask
