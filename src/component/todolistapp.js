import { render } from "@testing-library/react";
import React from "react";
import { Component } from "react";
import Deletetask from "./deletetasks";
import Informationtask from "./informationtask";
import Inputtask from "./inputtask";
import Filtertask from "./filtertask";
import Task from "./task.js"
import "./style.css";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';



class Todolistapp extends Component{

    constructor(propt){
        super(propt)
        this.state={
            incr:0,
            desc:'',
            table:[]
        }
        this.val=this.val.bind(this)
        this.handlchange=this.handlchange.bind(this)
        this.nball=this.nball.bind(this)
        this.nbtermine=this.nbtermine.bind(this)
        this.nbencours=this.nbencours.bind(this)
        this.all=this.all.bind(this)
        this.encour=this.encour.bind(this)
        this.termine=this.termine.bind(this)
        this.delall=this.delall.bind(this)
        this.delter=this.delter.bind(this)
        this.termineElement=this.termineElement.bind(this)
        this.retermineElement=this.retermineElement.bind(this)
        this.delone=this.delone.bind(this)

        this.obj=this.state.table
        
        

        

        
    }
    //inputtask
    
    val(e){
        const i= this.state.incr
        const table=this.state.table
        const tables={id:i,description:this.state.desc,completed:false}
        table.push(tables)
        this.setState({table:table})
        this.setState({incr:this.state.incr+1})
        this.obj=this.state.table
   

    }
    handlchange(e){
        this.setState({desc:e.target.value})


    }

    //info

    nball(){
        return (this.obj.length)
    }
    
    nbtermine(){
        return(this.obj.filter(item=>item.completed===true).length)
    }
    nbencours(){
        return(this.obj.filter(item=>item.completed===false).length)
    }
    //filter
    all(e){ 
        this.setState({table:this.obj})
    }
    termine(e){
        this.setState({table:this.obj.filter(item=>item.completed===true)})
        

    }
    encour(e){
        this.setState({table:this.obj.filter(item=>item.completed===false)})
        
        
    }
    //task
     termineElement(e){
        const i=e.target.value
        const table=this.state.table
        const t1=(this.state.table.filter(item=> item.id===Number(i)))
        table.map(item=> t1.map(it=> it.id===item.id? item.completed=true:'ghjgj'))
        this.setState({table:table})

     }

     retermineElement(e){
        const i=e.target.value
        const table=this.state.table
        const t1=(this.state.table.filter(item=> item.id===Number(i)))
        table.map(item=> t1.map(it=> it.id===item.id? item.completed=false:'ghjgj'))
        this.setState({table:table})


     }
     delone(e){
        const i= e.target.value
        this.setState({table:this.state.table.filter(item=>item.id!==Number(i))})
        this.obj=this.state.table

    }
    


    //delete
    delall(e){
        this.setState({
            incr:0,
            desc:'',
            table:[]
        })
        this.obj=[]
        
     



    }
    delter(e){
        this.setState({table:this.state.table.filter(item=>item.completed===false)})
        this.obj=this.obj.filter(item=>item.completed===false)
    }


    


    render(){
        return( 
            <div className="card">
                <Inputtask change={(e)=>this.handlchange(e)} sub={(e)=>this.val(e)} />
                <hr />
                <Informationtask nball={this.nball()} nbtermine={this.nbtermine()}  nbencours={this.nbencours()} />
                <hr />
                <Filtertask termine={(e)=>this.termine(e)} all={(e)=>this.all(e)} encour={(e)=>this.encour(e)} />
                <Task  obj={this.state.table} termineElement={(e)=>this.termineElement(e)} retermineElement={(e)=>this.retermineElement(e)} delone={(e)=>this.delone(e)} />
                <Deletetask delall={(e)=>this.delall(e)} delter={(e)=>this.delter(e)}/>
            </div>
        )
    }


}

export default Todolistapp
