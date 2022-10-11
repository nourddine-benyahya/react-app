import "./style.css";
import { Component } from "react";
import React from "react";
class Task extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
            {this.props.obj.map((item,index) =>
                <div key={index} className="task">
                        {item.completed? <p  className="line">{item.description}</p> : <p>{item.description}</p>}
                        <div>
                        <button className="btn btn-outline-success" value={item.id} onClick={this.props.termineElement} >termine</button>
                        <button className="btn btn-outline-info" value={item.id} onClick={this.props.retermineElement} >retermine</button>
                        <button className="btn btn-outline-danger" value={item.id} onClick={this.props.delone} >supremer</button>
                    </div>
                </div>
            )}
            </div>
        )
    }


}
export default Task