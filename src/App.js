import './App.css';
import Title from './components/Title';
import TodoList from "./components/TodoList"
import BaseButton from './components/BaseButton/BaseButton'
import Counter from './components/Counter'

function App() {
  const hello = 'Hello React';


  function clickMini() { console.log('Click mini') }
  function clickNormal() { console.log('Click normal') }


  return (
    <div className="App">
      <Title title={hello} />

      <Counter />

      <BaseButton onClick={clickNormal} title='Normal Button' />
      <BaseButton onClick={clickMini} title='Mini Button' variant='mini' />

      
      <TodoList />

    </div>
  );
}

export default App;
