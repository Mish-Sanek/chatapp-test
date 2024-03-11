import React from 'react'

const TodoFilter = ({ activeFilter, setActiveFilter }) => {

  const filtersList = [
    {
      type: 'all',
      name: 'All tasks'
    },
    {
      type: 'completed',
      name: 'Completed tasks'
    },
    {
      type: 'uncompleted',
      name: 'Uncompleted tasks'
    }
  ];

  return (
    <div className='todo-filter'>
      <p className='todo-filter__title'>Sort by:</p>
      <ul className='todo-filter__list'>
        {
          filtersList.map((filter) => {
            return (
              <li
                className={`todo-filter__list-item ${filter.type === activeFilter && 'active'}`}
                key={filter.type}
                onClick={() => setActiveFilter(filter.type)}
              >
                {filter.name}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default TodoFilter
