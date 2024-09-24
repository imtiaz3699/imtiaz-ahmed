import React from 'react'

function Button({btnText,className,onClick}:{btnText:string,className?:string,onClick?:any}) {
  return (
    <button className={className} onClick = {onClick}>{btnText}</button>
  )
}

export default Button