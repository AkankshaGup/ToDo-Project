const app={
  title:"indesion app",
  subtitle:"this is from subtitle",
  options:[]
}


const onFormSubmit=(e)=>{
e.preventDefault();
const option = e.target.elements.options.value;
if(option){
  app.options.push(option);
  e.target.elements.options.value="";
}
renderOption();
}

const RemoveOption=()=>{
  app.options=[];
  renderOption();
}
const number=[12,34,456];
const OnMakeDesision=()=>{
  const rendomnum=Math.floor( Math.random() * app.options.length);
  let option=app.options[rendomnum];
  alert(option)
}
const renderOption=()=>{
  var templet=(
    <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{(app.options.length>0) ? "here is your options" : "no option"}</p>
    <p>{app.options.length}</p> 
    <button disabled={app.options.length==0} onClick={OnMakeDesision}>What should i do ?</button>
    <button onClick={RemoveOption}>Remove All</button>
  
    <ol>
    {app.options.map((val,ind)=>{
      return<li key={ind}> {val}</li>
    })}
    </ol>
    <form onSubmit={onFormSubmit}>
    <input type="text" name="options"/>
    <button>Add options</button>
    </form>
    </div>
     );
     ReactDOM.render(templet,document.getElementById("app"));
}

renderOption();
