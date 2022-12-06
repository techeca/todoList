export default function TodoListByDate({allTodoList, route, selectDate}){
  function todoListByDate(){
    const a = []

    allTodoList.forEach((item, i) => {
      if(a.filter(nl => nl === item.date).length === 0){
        a.push(item.date)
      }
    });

    return a
  }

  return(
    <div className={`bg-white m-8 rounded-lg ${route === 'home' ? '': 'hidden'}`}>
        <ul>
          {allTodoList.length > 0 ?
            todoListByDate().map(td =>
            <li key={td} onClick={() => selectDate(td)} className={'flex p-5 border-b last:border-b-0 cursor-pointer'}>
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
  )
}
