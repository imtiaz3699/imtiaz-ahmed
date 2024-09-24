import React from 'react'

function Button({btnText,className}:{btnText:string,className:string}) {
  return (
    <button className={className}>{btnText}</button>
  )
}

export default Button