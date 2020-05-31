class Counter extends React.Component{
  constructor(props){
    super(props);
    this.handleAddOne=this.handleAddOne.bind(this);
    this.handleMinusOne=this.handleMinusOne.bind(this);
    this.handlereset=this.handlereset.bind(this);
    this.state={
      count:0,
    }
  }
  componentDidMount(){
let json =localStorage.getItem("count");
json=parseInt(json, 10);
this.setState(()=>({
  count:json
}))
  }
  componentDidUpdate(prevprops,prevstate){
    if(prevstate.count !== this.state.count){
      localStorage.setItem("count",this.state.count)
    }

  }
  handleAddOne(){
    this.setState((prevstate)=>{
      return{
        count:prevstate.count+1,
      }
    })
  }
  handleMinusOne(){
    this.setState((prevstate)=>{
      return{
        count:prevstate.count-1,
      }
    })
  }
  handlereset(){
    this.setState((prevstate)=>{
      return{
        count:0,
      }
    })
    this.setState((prevstate)=>{
      return{
        count:prevstate.count+1,
      }
    })
  }
  render(){
    return(
      <div>
     <h1>Count: {this.state.count}</h1>
     <button onClick={this.handleAddOne}>+1</button>
     <button onClick={this.handleMinusOne}>-1</button>
     <button onClick={this.handlereset}>reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter counter="-12"/>,document.getElementById("app"));


/* let count=0;
let addOne=()=>{
  count++;
  renderCounterApp();
}
let minusOne=()=>{
  count--;
  renderCounterApp();
}
let reset=()=>{
  count=0;
  renderCounterApp();
}

const renderCounterApp=()=>{
  const templetetwo=(
    <div>
    <h1>count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>reset</button>
    </div>
  )
  ReactDOM.render(templetetwo,document.getElementById("app"));
}

renderCounterApp();
 */