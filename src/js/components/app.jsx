import React from 'react';
import TodoList from './todolist.jsx'
import TodoInput from './todoinput.jsx'
import TodoFilter from './todofilter.jsx'
import Store from '../store.js'

const todos = (todos, visibilityFilter) => {
  console.log(visibilityFilter)
  return todos.filter(todo => {
    console.log(todo.done)
    switch (visibilityFilter) {
      case 'SHOW_DONE':
        if(todo.done){return todo} else {return}
      case 'SHOW_NOTDONE':
        if(!todo.done){return todo} else {return}
        default:
      return todo
    }
  })
}

const toggleTodo = (id) => {Store.dispatch({type:'TOGGLE_TODO', id:id})}
const addTodo = (text) => {Store.dispatch({type: 'ADD_TODO', text: text})}
const filterTodos = (type) => {Store.dispatch({type:type})}

export default class App extends React.Component {

  render () {
    let todosList = todos(Store.getState().todos, Store.getState().todosVisibilityFilter)
    return <div>
      <h1>Todo App</h1>
      <TodoInput addTodo={addTodo}/>
      <TodoList todosList={todosList} toggleTodo={toggleTodo} />
      <TodoFilter filterTodos={filterTodos} />
    </div>
  }
}
