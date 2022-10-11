import React from "react";
import { Component } from "react";
import "./style.css";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


class Deletetask extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(

            <div className="delete">
                <button className="btn btn-outline-danger" onClick={this.props.delall}>supprimer tous</button>
                <button className="btn btn-outline-danger" onClick={this.props.delter} >supremer termine</button>
            </div>
        )
    }

}
export default Deletetask
