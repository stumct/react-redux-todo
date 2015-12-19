import React from 'react';

export default ({filterTodos}) => {
  return (
    <div>
      SHOW:<a onClick={() => filterTodos('SHOW_ALL')}>All</a>,{' '}
      <a onClick={() => filterTodos('SHOW_DONE')}>Done</a>,{' '}
      <a onClick={() => filterTodos('SHOW_NOTDONE')}>Not Done</a>
    </div>
  )
}
