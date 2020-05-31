import React from 'react';

export default class AddOptions extends React.Component{
  constructor(props){
    super(props);
    this.handleAddOption=this.handleAddOption.bind(this);
    this.state={
      error:undefined,
    }
  }
  handleAddOption(e){
    e.preventDefault();
    let val=e.target[0].value.trim();
    const errorval=this.props.handleAddOptions(val)
   
   this.setState((prvstete)=>({error:errorval}))
    e.target[0].value="";
  }
  render(){
    return(
      <div>
      <form onSubmit={this.handleAddOption}>
      <input type="text" name="option"/>
      <button type="submit">Add option</button>
      </form>
      {this.state.error && <p>{this.state.error}</p>}
      </div>
    )
  }
}

