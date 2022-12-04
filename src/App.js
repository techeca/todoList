import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList'
import MiHeader from './components/MiHeader'

function App() {
  return (
    <div className="App">
      <MiHeader />
      <TodoList />
    </div>
  );
}

export default App;
