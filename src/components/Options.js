import React from 'react';
import Option from './Option.js'

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

export default Options;