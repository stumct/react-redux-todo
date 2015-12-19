import React from 'react';

export default ({addTodo}) => {
let input;
  return (
  <div>
    <input type='text' ref={node => input=node}/>
    <button onClick={() => {addTodo(input.value); input.value=''}}>Add Todo</button>
  </div>
)
}
