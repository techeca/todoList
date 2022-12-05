import './App.css';
import {useState, useEffect} from 'react'
import TodoList from './components/TodoList'
import MiHeader from './components/MiHeader'
import NewTask from './components/NewTask'

function App() {
  const [route, setRoute] = useState('home') //home, todoList, newTask
  const [dateSelected, setDateSelected] = useState('')
  const [newTaks, setNewTask] = useState(false)
  const [allTodoList, setAllTodoList] = useState([])
  //const [todoListByDate, setTodoListByDate] = useState([])
  const todoListTemp = [
    {id:1, name:'Study lesson', date:'Today', isCompleted:false, category: 'lesson'},
    {id:2, name:'Run 5k', date:'Tomorrow', time:'4:00pm', isCompleted:false, category: 'calendar'},
    {id:3, name:'Go to party', date:'Someday', time:'10:00pm', isCompleted:false, category: 'exercise'},
    {id:4, name:'Game meetup', date:'Yesterday', time:'1:00pm', isCompleted:true, category: 'calendar'},
    {id:5, name:'Take out trash', date:'Yesterday', isCompleted:true, category: 'lesson'}
  ]

  function todoListByDate(){
    const a = []

    allTodoList.forEach((item, i) => {
      if(a.filter(nl => nl === item.date).length === 0){
        a.push(item.date)
      }
    });

    return a
  }

  useEffect(() => {
    //setAllTodoList(todoListTemp)
  }, [])

  function generateDate(){
    const newDate = new Date()
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

    return `${months[newDate.getMonth()]} ${newDate.getDate()}, ${newDate.getFullYear()}`
  }

  function insertTask(task){
    const newTodoList = allTodoList
    newTodoList.push(task)
    setAllTodoList(newTodoList)
    setRoute('todoList')
    setDateSelected(task.date)
  }

  //selecciona grupo de todoList
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

  return (
    <div className="App">
      <MiHeader fecha={generateDate()} dateSelected={dateSelected} route={route} setRoute={setRoute}/>

        <div className={`bg-white m-8 rounded-lg ${route === 'home' ? '': 'hidden'}`}>
            <ul>
              {allTodoList.length > 0 ?
                todoListByDate().map(td =>
                <li key={td} onClick={() => selectDate(td)} className={'flex p-5 border-b last:border-b-0'}>
                  <div className={'flex w-full flex-col justify-center pl-3'}>
                    <p className={'text-start font-semibold text-gray-800'}>{td}</p>
                  </div>
                </li>)
                :
                <li className={'flex p-5 border-b last:border-b-0'}>
                  <div className={'flex w-full flex-col justify-center pl-3'}>
                    <p className={'text-start font-semibold text-gray-800'}>No Task</p>
                  </div>
                </li>
              }
            </ul>
        </div>

      {route === 'todoList' ?
        <TodoList todoListUser={allTodoList} updateTodoList={setAllTodoList} newTaskHandler={setNewTask} dateSelected={dateSelected} setRoute={setRoute} />
        :
       route === 'newTask' ?
          <NewTask todoList={allTodoList} newTaskHandler={insertTask} dateSelected={dateSelected} />
          :
          <></>
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
