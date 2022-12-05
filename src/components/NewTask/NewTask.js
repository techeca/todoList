import {useState} from 'react'
import {generateDate} from '../../utils.js'

export default function NewTask({todoList, newTaskHandler, dateSelected}){
  const [newDate, setNewDate] = useState(dateSelected ? dateSelected : '')
  const [task, setTask] = useState({id:todoList.length+1, name:'', date:'', isCompleted:false, category: ''})

  function selectIcon(iconSelected){
    setTask({
      ...task, category:iconSelected
    })
  }

  function getIcon(typeIcon, isCompleted){
      switch (typeIcon) {
        case 'lesson':
          return <div onClick={() => selectIcon('lesson')} className={`hover:border-sky-800 bg-sky-100 border-2 border-white flex justify-center self-center rounded-full w-12 h-12 ${task.category === 'lesson' ? 'border-sky-800' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" id="iconLesson" data-name="iconLesson" className='fill-sky-800 self-center' viewBox="0 0 24 24" width="16" height="16"><path d="M22,24H2V3C2,1.346,3.346,0,5,0h14c1.654,0,3,1.346,3,3V24Zm-18-2H20V3c0-.551-.449-1-1-1H5c-.551,0-1,.449-1,1V22ZM18,5h-6v2h6v-2Zm0,6h-6v2h6v-2Zm0,6h-6v2h6v-2ZM10,4H6v4h4V4Zm0,6H6v4h4v-4Zm0,6H6v4h4v-4Z"/></svg>
          </div>
        case 'calendar':
          return <div onClick={() => selectIcon('calendar')} className={`hover:border-violet-800 bg-violet-100 border-2 border-white flex justify-center self-center rounded-full w-12 h-12 ${task.category === 'calendar' ? 'border-violet-800' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" id="iconCalendar" data-name="iconCalendar" className='fill-violet-800 self-center' viewBox="0 0 24 24" width="16" height="16"><path d="M19,2h-1V1c0-.552-.447-1-1-1s-1,.448-1,1v1H8V1c0-.552-.447-1-1-1s-1,.448-1,1v1h-1C2.243,2,0,4.243,0,7v12c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V7c0-2.757-2.243-5-5-5ZM5,4h14c1.654,0,3,1.346,3,3v1H2v-1c0-1.654,1.346-3,3-3Zm14,18H5c-1.654,0-3-1.346-3-3V10H22v9c0,1.654-1.346,3-3,3Zm-1.168-8.848c.384,.397,.372,1.031-.025,1.414l-4.74,4.568c-.553,.553-1.307,.866-2.108,.866s-1.555-.312-2.121-.879l-2.252-2.092c-.404-.376-.428-1.009-.052-1.413,.378-.405,1.01-.427,1.413-.052l2.278,2.117c.433,.43,1.063,.402,1.439,.026l4.754-4.582c.398-.383,1.03-.371,1.414,.026Z"/></svg>
          </div>
        case 'exercise':
          return <div onClick={() => selectIcon('exercise')} className={`hover:border-yellow-800 bg-yellow-100 border-2 border-white flex justify-center self-center rounded-full w-12 h-12 ${task.category === 'exercise' ? 'border-yellow-800' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" id="iconExercise" data-name="iconExercise" className='fill-yellow-800 self-center' viewBox="0 0 24 24" width="16" height="16"><path d="M15.067,16C21.656,15.973,24,12.488,24,9.5a3.5,3.5,0,0,0-2.76-3.418,19.219,19.219,0,0,0,.7-2.489,2.961,2.961,0,0,0-.613-2.476A3.022,3.022,0,0,0,18.977,0H5.023A3.022,3.022,0,0,0,2.672,1.117a2.961,2.961,0,0,0-.613,2.476,19.061,19.061,0,0,0,.7,2.489A3.5,3.5,0,0,0,0,9.5c0,2.988,2.344,6.473,8.933,6.5A4.507,4.507,0,0,1,9,16.637V20a1.883,1.883,0,0,1-2,2H5v2H19V22H17.008A1.885,1.885,0,0,1,15,20V16.637A4.507,4.507,0,0,1,15.067,16ZM20.5,8A1.5,1.5,0,0,1,22,9.5c0,2.048-1.631,4.225-6.124,4.475a3.642,3.642,0,0,1,.608-.626A14.949,14.949,0,0,0,20.443,8ZM2,9.5A1.5,1.5,0,0,1,3.5,8h.057a14.935,14.935,0,0,0,3.958,5.349,3.648,3.648,0,0,1,.609.626C3.631,13.725,2,11.548,2,9.5Zm11,7.137V20a4.08,4.08,0,0,0,.487,2H10.513A4.08,4.08,0,0,0,11,20V16.637a6.137,6.137,0,0,0-2.236-4.851C6.3,9.816,4.6,6.05,4.018,3.19a.956.956,0,0,1,.2-.809A1.029,1.029,0,0,1,5.023,2H18.977a1.029,1.029,0,0,1,.8.381.96.96,0,0,1,.2.809c-.586,2.86-2.282,6.626-4.747,8.6A6.139,6.139,0,0,0,13,16.637Z"/></svg>
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
      alert('Must select an icon and title')
    }

    return
  }

  function handleChange(e){
    e.preventDefault()
    setNewDate(e.target.value)
  }

  return(
      <form onSubmit={getFormData} className=''>
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
              <input type='text' name='taskDate' onChange={(e) => handleChange(e)} value={newDate} className={`border rounded p-3 font-regular`} placeholder='DD/MM/YYYY'/>
              <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setNewDate(generateDate)} className={`absolute mt-[54px] self-end mr-3 fill-violet-800`} viewBox="0 0 24 24" width="16" height="16"><g id="_01_align_center" data-name="01 align center"><path d="M21,2H18V0H16V2H8V0H6V2H3A3,3,0,0,0,0,5V24H24V5A3,3,0,0,0,21,2ZM2,5A1,1,0,0,1,3,4H21a1,1,0,0,1,1,1V8H2ZM2,22V10H22V22Z"/><rect x="15" y="13" width="2" height="2"/><rect x="11" y="13" width="2" height="2"/><rect x="7" y="13" width="2" height="2"/><rect x="15" y="17" width="2" height="2"/><rect x="11" y="17" width="2" height="2"/><rect x="7" y="17" width="2" height="2"/></g></svg>
            </div>

            <div className={`flex flex-col w-[48%]`}>
              <label type='label' className={`self-start pb-3 font-semibold`}>Time</label>
              <input type='text' name='taskTime' className={`border rounded p-3 font-regular`} placeholder='12:00'/>
              <svg xmlns="http://www.w3.org/2000/svg" className={`absolute mt-[54px] self-end mr-3 fill-violet-800`} id="iconClock" data-name="Layer 1" viewBox="0 0 24 24" width="16" height="16"><path d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12Zm0-22C6.486,2,2,6.486,2,12s4.486,10,10,10,10-4.486,10-10S17.514,2,12,2Zm5,10c0-.553-.447-1-1-1h-3V6c0-.553-.448-1-1-1s-1,.447-1,1v6c0,.553,.448,1,1,1h4c.553,0,1-.447,1-1Z"/></svg>
            </div>
          </div>

          {/*textarea*/}
          <label type='label' className={`self-start pb-3 font-semibold mt-3`}>Notes</label>
          <textarea type='text' className={`border rounded p-3 font-regular`} placeholder='Notes' rows='5'></textarea>

        </div>
        <div className={'fixed bottom-3 w-full p-6'}>
          {/*<div type={'submit'}  className={'rounded-3xl bg-violet-900 hover:bg-violet-800 hover:cursor-pointer'}>
            <p className={'text-white font-bold text-sm p-3'}>Save</p>
          </div>*/}
          <button type='submit' className={'w-full p-3 text-white font-bold rounded-3xl bg-violet-900 hover:bg-violet-800 hover:cursor-pointer'}>
            Save
          </button>
        </div>
      </form>
  )
}
