import './TodoList.css'
import {useState} from 'react'

export default function TodoList({todoListUser, updateTodoList, newTaskHandler, dateSelected, setRoute}){
  //const [todoListUser, setTodoList] = useState(todoListUser)

  function getIcon(typeIcon, isCompleted){
    switch (typeIcon) {
      case 'lesson':
        return <div className={`bg-sky-100 flex justify-center self-center rounded-full w-12 h-10 ${isCompleted ? 'opacity-50' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" id="iconLesson" data-name="iconLesson" className='fill-sky-800 self-center' viewBox="0 0 24 24" width="16" height="16"><path d="M22,24H2V3C2,1.346,3.346,0,5,0h14c1.654,0,3,1.346,3,3V24Zm-18-2H20V3c0-.551-.449-1-1-1H5c-.551,0-1,.449-1,1V22ZM18,5h-6v2h6v-2Zm0,6h-6v2h6v-2Zm0,6h-6v2h6v-2ZM10,4H6v4h4V4Zm0,6H6v4h4v-4Zm0,6H6v4h4v-4Z"/></svg>
        </div>
      case 'calendar':
        return <div className={`bg-violet-100 flex justify-center self-center rounded-full w-12 h-10 ${isCompleted ? 'opacity-50' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" id="iconCalendar" data-name="iconCalendar" className='fill-violet-800 self-center' viewBox="0 0 24 24" width="16" height="16"><path d="M19,2h-1V1c0-.552-.447-1-1-1s-1,.448-1,1v1H8V1c0-.552-.447-1-1-1s-1,.448-1,1v1h-1C2.243,2,0,4.243,0,7v12c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V7c0-2.757-2.243-5-5-5ZM5,4h14c1.654,0,3,1.346,3,3v1H2v-1c0-1.654,1.346-3,3-3Zm14,18H5c-1.654,0-3-1.346-3-3V10H22v9c0,1.654-1.346,3-3,3Zm-1.168-8.848c.384,.397,.372,1.031-.025,1.414l-4.74,4.568c-.553,.553-1.307,.866-2.108,.866s-1.555-.312-2.121-.879l-2.252-2.092c-.404-.376-.428-1.009-.052-1.413,.378-.405,1.01-.427,1.413-.052l2.278,2.117c.433,.43,1.063,.402,1.439,.026l4.754-4.582c.398-.383,1.03-.371,1.414,.026Z"/></svg>
        </div>
      case 'exercise':
        return <div className={`bg-yellow-100 flex justify-center self-center rounded-full w-12 h-10 ${isCompleted ? 'opacity-50' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" id="iconExercise" data-name="iconExercise" className='fill-yellow-800 self-center' viewBox="0 0 24 24" width="16" height="16"><path d="M15.067,16C21.656,15.973,24,12.488,24,9.5a3.5,3.5,0,0,0-2.76-3.418,19.219,19.219,0,0,0,.7-2.489,2.961,2.961,0,0,0-.613-2.476A3.022,3.022,0,0,0,18.977,0H5.023A3.022,3.022,0,0,0,2.672,1.117a2.961,2.961,0,0,0-.613,2.476,19.061,19.061,0,0,0,.7,2.489A3.5,3.5,0,0,0,0,9.5c0,2.988,2.344,6.473,8.933,6.5A4.507,4.507,0,0,1,9,16.637V20a1.883,1.883,0,0,1-2,2H5v2H19V22H17.008A1.885,1.885,0,0,1,15,20V16.637A4.507,4.507,0,0,1,15.067,16ZM20.5,8A1.5,1.5,0,0,1,22,9.5c0,2.048-1.631,4.225-6.124,4.475a3.642,3.642,0,0,1,.608-.626A14.949,14.949,0,0,0,20.443,8ZM2,9.5A1.5,1.5,0,0,1,3.5,8h.057a14.935,14.935,0,0,0,3.958,5.349,3.648,3.648,0,0,1,.609.626C3.631,13.725,2,11.548,2,9.5Zm11,7.137V20a4.08,4.08,0,0,0,.487,2H10.513A4.08,4.08,0,0,0,11,20V16.637a6.137,6.137,0,0,0-2.236-4.851C6.3,9.816,4.6,6.05,4.018,3.19a.956.956,0,0,1,.2-.809A1.029,1.029,0,0,1,5.023,2H18.977a1.029,1.029,0,0,1,.8.381.96.96,0,0,1,.2.809c-.586,2.86-2.282,6.626-4.747,8.6A6.139,6.139,0,0,0,13,16.637Z"/></svg>
        </div>
      default:
      return <></>
    }
  }

  function addTodoList(nameTodo, actualList){
    let tempTdo = actualList
    tempTdo.push({name:'prueba', date:'Yesterday', isCompleted:true, category: 'lesson'})
    return tempTdo
  }

  //cambia estado a completo
  function completeTodo(idTodo){
    const updateTodo = todoListUser.map(t => {
      if(t.id === idTodo){t.isCompleted ? t.isCompleted = false : t.isCompleted = true}
      return t
    })
    updateTodoList(updateTodo)
  }

  return(
    <>
    <div className={`${todoListUser ? ' ' : ''} bg-white m-8 rounded-lg`}>
      {todoListUser ?
        <ul className={''}>
          {todoListUser.filter(fl => fl.date === dateSelected).filter(t => !t.isCompleted).map(td =>
          <li key={td.id} className={'flex p-5 border-b last:border-b-0'}>
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
        <a>No items</a>
      }
    </div>
    {todoListUser ?
      <div className={`flex flex-col mb-20`}>
        <a className={'pl-8 text-start font-semibold text-gray-800'}>Completed</a>
        <div className={'bg-white m-8 rounded-lg'}>
          <ul>
          {todoListUser.filter(fl => fl.date === dateSelected).filter(t => t.isCompleted).map(td =>
            <li key={td.id} className={'flex p-5 border-b last:border-b-0'}>
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
