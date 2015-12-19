import {createStore, combineReducers} from 'redux';

let todoids=0;

const todos = (state=[], action) => {
  switch (action.type) {
    case 'ADD_TODO':
    return [...state, todo(undefined, action)]
    case 'TOGGLE_TODO':
    state.map((todo) => {
      if (todo.id === action.id) {
        return Object.assign(todo,{done:!todo.done})
      }
      return todo
    })
    default:
    return state;
  }
}

const todo = (state={}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
    return {id:todoids++, text:action.text, done:false}
    default:
    return state;
  }
}

const todosVisibilityFilter = (state='SHOW_ALL', action) => {
switch (action.type) {
  case 'SHOW_ALL':
    return 'SHOW_ALL'
  case 'SHOW_DONE':
    return 'SHOW_DONE'
  case 'SHOW_NOTDONE':
    return 'SHOW_NOTDONE'
  default:
    return state
}

}

const reducers = combineReducers({todos,todosVisibilityFilter})
const Store = createStore(reducers);
export default Store;
