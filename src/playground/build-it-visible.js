class VisiblityToggle extends React.Component{
  constructor(props){
    super(props);
    this.toggle=this.toggle.bind(this);
    this.state={
      visiblity:true,
    }
  }
  toggle(){
    this.setState((prevstate)=>{
      return{
        visiblity:!prevstate.visiblity,
      }
    })
  }
  render(){
    return(
      <div>
      <h1>visible Toggle</h1>
      <button onClick={this.toggle}>
{this.state.visiblity ? "show detail" :"hide detail"}
</button>

{!this.state.visiblity && <p>kdkljdflkj kdflkdj dkfnlkd dkjfnkd djfknkd</p>}
      </div>
    )
  }
}

ReactDOM.render(<VisiblityToggle />,document.getElementById("app"));
/* let visiblity=true;

const toggle=()=>{
visiblity=!visiblity;
render();
}
const render =()=>{
const visile=(
  <div>
  <h1>visible Toggle</h1>
<button onClick={toggle}>
{visiblity ? "show detail" :"hide detail"}
</button>
{!visiblity && <p>kdkljdflkj kdflkdj dkfnlkd dkjfnkd djfknkd</p>}
  </div>
)
ReactDOM.render(visile,document.getElementById("app"));
}
render(); */