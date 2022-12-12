import {render, fireEvent, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import NewTask from '../components/NewTask'
//import DateSelector from '../components/NewTask/DateSelector'
//window.scrollTo = jest.fn()

test('Render New Task and change date', () => {
  const mockHandler = jest.fn()
  const miApp = render(<NewTask todoList={[]} newTaskHandler={mockHandler} dateSelected={''} />)
  const dSel = miApp.getByPlaceholderText('DD/MM/YYYY')

  expect(miApp.container).toHaveTextContent('Task Name')
  expect(miApp.container).toHaveTextContent('Category')
  expect(miApp.container).toHaveTextContent('Date')
  expect(miApp.container).toHaveTextContent('Time')

  fireEvent.click(dSel)

  const selMonth = miApp.getByPlaceholderText('Month')
  const selDay = miApp.getByPlaceholderText('Day')
  userEvent.selectOptions(selMonth, 'January')
  userEvent.selectOptions(selDay, '31')
  const btnClose = miApp.getByText('Close')
  fireEvent.click(btnClose)

  expect(dSel.value).toEqual('January 31, 2022')
})
