
class IndecisionApp extends React.Component{
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
  let json=localStorage.getItem("Option");
  let option=JSON.parse(json)
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
    const title="indecision";
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

const Header=(props)=>{
  return(
    <div>text text
    <h1>{props.title}</h1>
    <h2>{props.subtitle}</h2>
    </div>
    
  )
}
Header.defaultProps={
  title:'some default'
}
/* class Header extends React.Component{
  render(){
    return(
      <div>
      <h1>{this.props.title}</h1>
      <h2>{this.props.subtitle}</h2>
      </div>
      
    )
  }
} */
const Action=(props)=>{
  return(
    <button 
    onClick={props.handlePick}
    disabled={!props.hasOption}
    >what should i do?</button>
  )
}
/* class Action extends React.Component{
 
  render(){
    return(
      <button 
      onClick={this.props.handlePick}
      disabled={!this.props.hasOption}
      >what should i do?</button>
    )
  }
} */
const Options=(props)=>{
  return(
    <div>
    <button onClick={props.handleDeleteOPtions}>remove all</button>
    {props.option.map((val,ind)=>{
      return <Option key={ind} textoption={val} handleDeleteOPtion={props.handleDeleteOPtion}/>
    })}
    </div>
  )
}
/* class Options extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
      <button onClick={this.props.handleDeleteOPtions}>remove all</button>
      {this.props.option.map((val,ind)=>{
        return <Option key={ind} textoption={val} />
      })}
      </div>
    )
  }
}
 */
const Option=(props)=>{
  return(
    <div>
   {props.textoption}
   <button 
   onClick={(e)=>{props.handleDeleteOPtion(props.textoption)}}
   >
   remove
   </button>
    </div>
  )
}
/* class Option extends React.Component{
  render(){
    return(
      <div>
     {this.props.textoption}
      </div>
    )
  }
} */
class AddOptions extends React.Component{
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
      <button type="submit">Add</button>
      </form>
      {this.state.error && <p>{this.state.error}</p>}
      </div>
    )
  }
}

/* const User=(props)=>{
  return(
<div>
<h5>Name: {props.name}</h5>
<h5>Age: {props.age}</h5>
</div>
    )
} */

ReactDOM.render(<IndecisionApp/>,document.getElementById("app"));