import {useState} from 'react'
import {iconos} from '../../utils.js'
import useDate from '../../hooks/useDate'
import DateSelector from './DateSelector.js'

export default function NewTask({todoList, newTaskHandler, dateSelected}){
  const [task, setTask] = useState({id:todoList.length+1, name:'', date:'', isCompleted:false, category: ''})
  const [openDateModal, setOpenDateModal] = useState(false)
  const mihook = useDate()

  function selectIcon(iconSelected){
    setTask({
      ...task, category:iconSelected
    })
  }

  function getIcon(typeIcon, isCompleted){
      switch (typeIcon) {
        case 'lesson':
          return <div onClick={() => selectIcon(typeIcon)} className={`hover:border-sky-800 bg-sky-100 border-2 border-white flex justify-center self-center rounded-full w-12 h-12 ${task.category === typeIcon ? 'border-sky-800' : ''}`}>
            {iconos[typeIcon]}
          </div>
        case 'calendar':
          return <div onClick={() => selectIcon(typeIcon)} className={`hover:border-violet-800 bg-violet-100 border-2 border-white flex justify-center self-center rounded-full w-12 h-12 ${task.category === typeIcon ? 'border-violet-800' : ''}`}>
            {iconos[typeIcon]}
          </div>
        case 'exercise':
          return <div onClick={() => selectIcon(typeIcon)} className={`hover:border-yellow-800 bg-yellow-100 border-2 border-white flex justify-center self-center rounded-full w-12 h-12 ${task.category === typeIcon ? 'border-yellow-800' : ''}`}>
            {iconos[typeIcon]}
          </div>
        default:
        return <></>
      }
    }

  function getFormData(e){
    e.preventDefault()
    if(e.target.taskTitle.value !== '' && task.category !== '' && e.target.taskDate.value !== '' && e.target.taskTime.value !== ''){
      const newTask = {...task, name:e.target.taskTitle.value, date:e.target.taskDate.value, time:e.target.taskTime.value}
      newTaskHandler(newTask)
    }else {
      alert('Must fill title, date, time and select icon')
    }
  }

  return(
    <>
      <form onSubmit={getFormData} className='select-none'>
        <div className={`flex flex-col p-6 text-gray-800 accent-violet-900 mb-20`}>
          {/*title*/}
          <label type='label' className={`self-start pb-3 font-semibold`}>Task Name</label>
          <input type='text' name='taskTitle' className={`border rounded p-3 font-regular caret-violet-900`} placeholder='Task Title' />

          {/*Icons*/}
          <div className={`flex self-start py-6`}>
            <label type='label' className={`self-center font-semibold pr-9`}>Category</label>
            <div className={`flex gap-3`}>
              {getIcon('lesson', false)}{getIcon('calendar', false)}{getIcon('exercise', false)}
            </div>
          </div>

          {/*date & time*/}
          <div className={`flex w-full justify-between`}>

            <div className={`flex flex-col w-[48%]`}>
              <label type='label' className={`self-start pb-3 font-semibold`}>Date</label>
              <input readOnly type='label' name='taskDate' onClick={() => setOpenDateModal(true)}  value={mihook.getPrettyDate()} className={`border rounded p-3 font-regular`} placeholder='DD/MM/YYYY'/>
              <svg xmlns="http://www.w3.org/2000/svg" className={`absolute mt-[54px] self-end mr-3 fill-violet-800`} viewBox="0 0 24 24" width="16" height="16"><g id="_01_align_center" data-name="01 align center"><path d="M21,2H18V0H16V2H8V0H6V2H3A3,3,0,0,0,0,5V24H24V5A3,3,0,0,0,21,2ZM2,5A1,1,0,0,1,3,4H21a1,1,0,0,1,1,1V8H2ZM2,22V10H22V22Z"/><rect x="15" y="13" width="2" height="2"/><rect x="11" y="13" width="2" height="2"/><rect x="7" y="13" width="2" height="2"/><rect x="15" y="17" width="2" height="2"/><rect x="11" y="17" width="2" height="2"/><rect x="7" y="17" width="2" height="2"/></g></svg>
            </div>

            <div className={`flex flex-col w-[48%]`}>
              <label type='label' className={`self-start pb-3 font-semibold`}>Time</label>
              <input type='text' name='taskTime' className={`border rounded p-3 font-regular`} placeholder='12:00'/>
              <svg xmlns="http://www.w3.org/2000/svg" className={`absolute mt-[54px] self-end mr-3 fill-violet-800`} id="iconClock" data-name="Layer 1" viewBox="0 0 24 24" width="16" height="16"><path d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12Zm0-22C6.486,2,2,6.486,2,12s4.486,10,10,10,10-4.486,10-10S17.514,2,12,2Zm5,10c0-.553-.447-1-1-1h-3V6c0-.553-.448-1-1-1s-1,.447-1,1v6c0,.553,.448,1,1,1h4c.553,0,1-.447,1-1Z"/></svg>
            </div>

          </div>

          {/*textarea*/}
          <label type='label' className={`self-start pb-3 font-semibold mt-3`}>Notes</label>
          <textarea disabled type='text' className={`border rounded p-3 font-regular`} placeholder='Notes' rows='4'></textarea>

        </div>
        <div className={'fixed bottom-3 w-full p-6'}>
          <button type='submit' className={'w-full p-3 text-white font-bold rounded-3xl bg-violet-900 hover:bg-violet-800 hover:cursor-pointer'}>
            Save
          </button>
        </div>
      </form>

      {/*Modal date/time*/}
      {openDateModal ?
        <DateSelector mihook={mihook} setOpenDateModal={setOpenDateModal} />
        :
        <></>
      }

    </>
  )
}
