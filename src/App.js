//import './App.css';
import {useState, useEffect} from 'react'
import TodoList from './components/TodoList'
import MiHeader from './components/MiHeader'
import NewTask from './components/NewTask'
import TodoListByDate from './components/TodoListByDate'

function App() {
  const [route, setRoute] = useState('home') //home || todoList || newTask
  const [dateSelected, setDateSelected] = useState('')
  const [allTodoList, setAllTodoList] = useState([])

  function insertTask(task){
    const newTodoList = allTodoList
    newTodoList.push(task)
    setAllTodoList(newTodoList)
    setRoute('todoList')
    setDateSelected(task.date)
    localStorage.setItem('todoList', JSON.stringify(allTodoList))
  }

  function selectDate(date){
    setDateSelected(date)
    setRoute('todoList')
  }

  function handleNewTask(dt){
    if(route === 'home'){
      setDateSelected('')
    }
    setRoute('newTask')
  }

  useEffect(() => {
    const dataUser = localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : []
    setAllTodoList(dataUser)
  },[])

  return (
    <div className="text-center">
      <MiHeader dateSelected={dateSelected} route={route} setRoute={setRoute}/>

      {route === 'todoList' ?
        <TodoList todoListUser={allTodoList} updateTodoList={setAllTodoList} dateSelected={dateSelected} setRoute={setRoute} />
        :
       route === 'newTask' ?
          <NewTask todoList={allTodoList} newTaskHandler={insertTask} dateSelected={dateSelected} />
          :
          <TodoListByDate allTodoList={allTodoList} route={route} selectDate={selectDate} />
      }

      {route !== 'newTask' ?
        <div className={'fixed bottom-3 w-full p-6'}>
        {/*<div onClick={() => newTaskHandler(true)} className={'rounded-3xl bg-violet-900 hover:bg-violet-800 hover:cursor-pointer'}>
          <p className={'text-white font-bold text-sm p-3'}>Add New Task</p>
        </div>*/}
          <button onClick={() => handleNewTask(dateSelected)} className={'w-full p-3 text-white font-bold rounded-3xl bg-violet-900 hover:bg-violet-800 hover:cursor-pointer'}>
            Add New Task
          </button>
        </div>
        :
        <></>
      }

    </div>
  )
}

export default App;
