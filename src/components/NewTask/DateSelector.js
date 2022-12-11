export default function DateSelector({mihook, setOpenDateModal}){

  return(
    <div className={`flex overflow-hidden touch-none h-full justify-center items-center absolute top-0 bottom-0 bg-[#00000060] right-0 left-0 opacity-0.2`}>
      <div className={`bg-white py-4 rounded m-8 shadow-lg`} >

        <div className={`space-x-2 m-2`}>
          <select name='selectMonth' className={`rounded p-3 font-regular w-2/6 shadow`} defaultValue={mihook.month} onChange={(e) => mihook.generateCustomDate(mihook.day, e.target.value, mihook.year)} placeholder='Month'>
            {mihook.months.map((m, i) =>
              <option key={m} value={i+1}>{m}</option>
            )}
          </select>
          <select name='selectDay' className={`border rounded p-3 font-regular w-1/6 shadow`} defaultValue={mihook.day} onChange={(e) => mihook.generateCustomDate(e.target.value, mihook.month, mihook.year)} placeholder='Day'>
            {Array.apply(null, {length:mihook.getDaysInMonth()}).map((n, i) =>
              <option key={i+1}>{i+1}</option>
             )}
          </select>
          <input type='text' disabled defaultValue={mihook.year} className={`border rounded p-3 font-regular w-1/6 select-none`} placeholder='Year' />
        </div>

        <input type='button' onClick={() => setOpenDateModal(false)} className={'hover:bg-red-700 bg-red-500 rounded text-white px-3 py-1 font-bold'} value='Save' />
      </div>

    </div>
  )
}
