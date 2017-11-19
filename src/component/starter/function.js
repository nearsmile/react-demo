import React from 'react';

export const AlertString = (props) => {
  const alertSomething = (event) => alert(props.text || 'Input Text Now!')
  return (
    <div onClick={ alertSomething }>
      Hello world!
    </div>
  )
}