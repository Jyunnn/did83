import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const [todo, setTodo] = useState('請輸入文字')
  return (
    <div className="App">
      <header className="App-header">
        <p>{ count }</p>
        <button onClick={()=>{setCount(count+1)}}> Add </button>
        <p>{ todo }</p>
        <input placeholder={todo} onChange={(e)=>setTodo(e.target.value)}></input>
      </header>
    </div>
  );
}

export default App;
