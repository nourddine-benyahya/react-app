import React from "react";
import "./style.css";
import { Component } from "react";
class Informationtask extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(

            <div className="info">
                <div>nomber totale : { this.props.nball }</div>
                <div>nomber termine : { this.props.nbtermine }</div>
                <div>nombre encours : {this.props.nbencours}</div>
            </div>
        )
    }
}
export default Informationtask
