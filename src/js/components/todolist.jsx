import React from 'react';

export default ({todosList, toggleTodo}) => {
  return (
  <ul>
    {todosList.map((t) => <li key={t.id} style={t.done ? {textDecoration:'line-through'} : {}} onClick={() => toggleTodo(t.id)}> {t.text}</li>)}
  </ul>)
}
