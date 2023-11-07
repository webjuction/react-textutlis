import React from 'react'

export default function Alertmsg(props) {
    const capatilize=(word)=>{
        const lower=word.toLowerCase();
        return word.charAt(0).toUpperCase()+lower.slice(1);
    }
  return (
    <div style={{height:"50px"}}>
    {props.alert &&
     <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capatilize(props.alert.type)}</strong> {props.alert.message}
 
</div>}
    </div>
  )
}
