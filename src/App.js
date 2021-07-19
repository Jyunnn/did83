import { useState, useEffect } from 'react';
import search from './search.svg';
import './css/App.css';

function App() {
  const localdata = JSON.parse(localStorage.getItem('todolist'));

  const [count, setCount] = useState( Date.now());
  const [todo, setTodo] = useState('');
  const [todolist, setTodolist] = useState( localdata || []);

  const addTodo = (e) => {
    e.preventDefault();
    if(todo === ''){
      return
    }
    setTodolist ((old)=>{
      return [...old, {id: count, todo: todo}]
    })
    setTodo('');
    setCount(Date.now());
  }

  const delTodo = (e) => {
    let list = [...todolist]
    let arr = list.find((a)=>{
      return a.id == e.currentTarget.value
    })

    console.log(list.indexOf(arr));
    list.splice(list.indexOf(arr) , 1)
    setTodolist(() => {
      return [...list]
    })
  }

  const renderTodolist = () => {
    if (todolist.length !== 0){
      return (
        todolist.map((v)=>{ 
          return (
            <div className="todo" key={v.id}>
              <p> 序列 : { v.id } </p>
              <p> { v.todo } </p>
              <button onClick={delTodo} value={ v.id }> DEL </button>
            </div>
          ) 
        })
      )
    } 
  }

  useEffect(() => {
    localStorage.setItem('todolist', JSON.stringify(todolist));
  })

  return (
    <div className="App">

        <form className="todo-form">
          <input type="text" placeholder="請輸入文字" value={todo} onChange={(e)=>{setTodo(e.target.value)}}></input>
          <button onClick={ addTodo }>
            <img src={search} alt="search-icon"/>
          </button>
        </form>

        <div className="todolist-area">
          {  renderTodolist() }
        </div>

    </div>
  );
}

export default App;
