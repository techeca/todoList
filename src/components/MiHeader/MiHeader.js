import './MiHeader.css'
import crossIcon from '../../images/cross.svg'

export default function MiHeader(){

  return(
    <header className="App-header">

      <div className={'flex items-center w-full p-6'}>
        <img className={`hidden absolute w-10 border rounded-full bg-white p-3`} src={crossIcon} width='10' height='10' alt='cross icon' />
        <p className={'w-full font-semibold text-sm'}>December 3, 2022</p>
      </div>
      <h1 className="text-3xl font-bold pb-24">
        TODO List
      </h1>
    </header>
  )
}
