import crossIcon from '../../images/cross.svg'
import backIcon from '../../images/angle-small-left.svg'

export default function MiHeader({fecha, dateSelected, route, setRoute}){

  return(
    <header className='bg-violet-900 text-white'>
      <div className={`flex items-center w-full p-6`}>
          <img onClick={route === 'todoList' || dateSelected === '' ? () => setRoute('home') : () => setRoute('todoList')} className={`${route === 'home' ? 'hidden': ''} hover:border-2 absolute w-10 border rounded-full bg-white p-3`} src={route === 'todoList' ? crossIcon : backIcon} width='10' height='10' alt='cross icon' />
        <p className={`w-full font-semibold text-sm`}>{route !== 'newTask' ? fecha : 'Add New Task'}</p>
      </div>
      {route === 'newTaks' ?
        <></>
        :
        <h1 className={`text-3xl font-bold pb-12 m-[5%]`}>
          TODO List
        </h1>
      }
    </header>
  )
}
