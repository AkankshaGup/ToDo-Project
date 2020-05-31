import React from 'react';
import AddOptions from './AddOption.js'

import Header from './Header.js'
import Action from './Action.js'
import Options from './Options.js'

export default class IndecisionApp extends React.Component{
  constructor(props){
    super(props);
    this.handleDeleteOPtions=this.handleDeleteOPtions.bind(this);
    this.handlePick=this.handlePick.bind(this);
    this.handleAddOptions=this.handleAddOptions.bind(this);
    this.handleDeleteOPtion=this.handleDeleteOPtion.bind(this);
    this.state={
      option:[],
    }
  }
componentDidMount(){
 // let json=localStorage.getItem("Option");
  this.setState(()=>({
    option:[]
  }))
}
  componentDidUpdate(prevprops,prevstate){
    if(prevstate.option.length !== this.state.option.length){
      let json=JSON.stringify(this.state.option)
      localStorage.setItem("Option",json);
    }

  }
  handleDeleteOPtions(){
   
    this.setState(()=>({ option:[]}))
  }
  handleDeleteOPtion(option){
   this.setState((prevstate)=>({
    option:prevstate.option.filter((opt)=>{
      return opt!==option;
    })
   }))
  }
  handlePick(){
    const rendomnum=Math.floor( Math.random() * this.state.option.length);
  let option=this.state.option[rendomnum];
  alert(option)
  }
  handleAddOptions(optval){
    if(!optval){
      return "Enter valid option"
    }else if(this.state.option.indexOf(optval) > -1){
      return "this option already exist";
    }else{
     
      this.setState((prevstate)=>({option:prevstate.option.concat([optval])}))
    }
   
  }
  render(){
    const subtitle="lets put your life in hands of computer"
    return(
      <div>
      <Header subtitle={subtitle} />
      <Action 
      handlePick={this.handlePick}
      hasOption={this.state.option.length>0}/>
      <Options
      handleDeleteOPtions={this.handleDeleteOPtions}
      option={this.state.option}
      handleDeleteOPtion={this.handleDeleteOPtion}
      />
      <AddOptions handleAddOptions={this.handleAddOptions}/>
      </div>
      
    )
  }
}
