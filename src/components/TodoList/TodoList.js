//import './TodoList.css'
import {iconos} from '../../utils.js'

export default function TodoList({todoListUser, updateTodoList, dateSelected, setRoute}){
  function getIcon(typeIcon, isCompleted){
    switch (typeIcon) {
      case 'lesson':
        return <div className={`bg-sky-100 flex justify-center self-center rounded-full w-12 h-10 ${isCompleted ? 'opacity-50' : ''}`}>
          {iconos[typeIcon]}
        </div>
      case 'calendar':
        return <div className={`bg-violet-100 flex justify-center self-center rounded-full w-12 h-10 ${isCompleted ? 'opacity-50' : ''}`}>
          {iconos[typeIcon]}
        </div>
      case 'exercise':
        return <div className={`bg-yellow-100 flex justify-center self-center rounded-full w-12 h-10 ${isCompleted ? 'opacity-50' : ''}`}>
          {iconos[typeIcon]}
        </div>
      default:
      return <></>
    }
  }

  function completeTodo(idTodo){
    const updateTodo = todoListUser.map(t => {
      if(t.id === idTodo){t.isCompleted ? t.isCompleted = false : t.isCompleted = true}
      return t
    })
    updateTodoList(updateTodo)
    localStorage.setItem('todoList', JSON.stringify(updateTodo))
  }

  return(
    <>
    <div className={`bg-white m-8 rounded-lg`}>
      {todoListUser ?
        <ul>
          {todoListUser.filter(fl => fl.date === dateSelected).filter(t => !t.isCompleted).map(td =>
          <li key={td.id} className={'flex p-5 border-b last:border-b-0 select-none'}>
            {getIcon(td.category)}
            <div className={'flex w-full flex-col justify-center pl-3'}>
              <p className={'text-start font-semibold text-gray-800'}>{td.name}</p>
              <p className={'text-start font-semibold text-gray-500 text-sm'}>{td?.time}</p>
            </div>
            <input type='checkbox' onChange={(() => completeTodo(td.id))} className={'w-6 checkbox accent-violet-900'} />
          </li>
          )}
        </ul>
        :
        <p>No items</p>
      }
    </div>
    {todoListUser ?
      <div className={`flex flex-col mb-20 `}>
        <p className={'pl-8 text-start font-semibold text-gray-800'}>Completed</p>
        <div className={'bg-white m-8 rounded-lg'}>
          <ul>
          {todoListUser.filter(fl => fl.date === dateSelected).filter(t => t.isCompleted).map(td =>
            <li key={td.id} className={'flex p-5 border-b last:border-b-0 select-none'}>
              {getIcon(td.category, td.isCompleted)}
              <div className={'flex w-full flex-col justify-center pl-3 opacity-50 line-through'}>
                <p className={'text-start font-semibold text-gray-800'}>{td.name}</p>
                <p className={'text-start font-semibold text-gray-500 text-sm'}>{td?.time}</p>
              </div>
              <input type='checkbox' onChange={(() => completeTodo(td.id))} className={'w-6 accent-violet-900'} defaultChecked/>
            </li>
          )}
          </ul>
        </div>
      </div>
      :
      <></>
    }

    </>
  )
}
