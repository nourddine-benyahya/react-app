import React from "react";
import { Component } from "react";
import "./style.css"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Inputtask extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(

            <div className="input" >
                <input type="text" className="inputtxt"  onChange={this.props.change} placeholder="saisir une tach..."  />
                <input type="button" onClick={this.props.sub} className="btn btn-outline-warning" value="+" />
            </div>
        )
    }
}
export default Inputtask