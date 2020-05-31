import React from 'react';

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
export default Option;