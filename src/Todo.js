import { useState, useEffect } from 'react';
import search from './search.svg';
import TodoBox from './components/TodoBox';
import './css/Todo.css';

function Todo() {
  const localData = JSON.parse(localStorage.getItem('todolist'));
  const localId = JSON.parse(localStorage.getItem('id'));

  const [id, setId] = useState( localId + 1 || 0);
  const [hash , setHash] = useState( Date.now());
  const [todo, setTodo] = useState('');
  const [todolist, setTodolist] = useState( localData || []);


  const saveId = () => {
    setId(id+1)
    localStorage.setItem('id', id)
  }

  const addTodo = (e) => {
    e.preventDefault();
    if(todo === ''){
      return
    }
    setTodolist ((old)=>{
      return [...old, {id: id ,hash: hash, todo: todo}]
    })
    setTodo('');
    saveId()
    setHash(Date.now());
  }

  const delTodo = (e) => {
    let list = [...todolist]
    let arr = list.find((v)=>{
      return v.hash == e.currentTarget.value
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
              <TodoBox delTodo={delTodo} todo={v} todolist={todolist} />
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

export default Todo;
