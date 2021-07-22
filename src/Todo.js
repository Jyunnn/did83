import { useState } from 'react';
import search from './search.svg';
import TodoBox from './components/TodoBox'
import './css/todo.css';

function Todo() {
  const [id, setId] = useState(0);
  const [isfinish, setIsfinish] = useState(false);
  const [todo, setTodo] = useState('');
  const [hash , setHash] = useState(Date.now());
  const [todolist, setTodolist] = useState([]);
  const [finishlist, setFinishlist] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    if(todo === ''){
      return
    }
    setTodolist ((old)=>{
      return [...old, {id: id, hash: hash, finish: isfinish, todo: todo}]
    })
    setTodo('');
    setHash(Date.now())
    setId(id+1);
  }

  const delTodo = (e) => {
    let list = [...todolist]
    let arr = list.find((a)=>{
      return a.id == e.currentTarget.value
    })

    list.splice(list.indexOf(arr) , 1)
    setTodolist(() => {
      return [...list]
    })
  }

  const handleFinishChange = (hash) => {
    let list = [...todolist];
    let finishList = [...finishlist];

    let arr = list.find((v)=>{
      return v.hash === hash
    })

    let index = list.indexOf(arr);
    list[index].finish = !list[index].finish


    setTodolist (()=>{
      return [...list]
    })
    setFinishlist(()=>{
      return [...finishList]
    })
  }

  const renderTodolist = (array) => {
    if (todolist.length === 0){
      return (
          <p> 空白 </p>
      )
    } else {
        return (
          array.map((v)=>{ 
            return (
              <TodoBox key={v.hash} delTodo={delTodo}  finishChange={handleFinishChange} {...v}/>
            ) 
          })
        )
    }
  }

  return (
    <div className="App">

        <form className="todo-form">
          <input type="text" placeholder="請輸入文字" value={todo} onChange={(e)=>{setTodo(e.target.value)}}></input>
          <button onClick={ addTodo }>
            <img src={search} alt="search-icon"/>
          </button>
        </form>

        <div className="todolist-area">
          {  renderTodolist(todolist) }
        </div>
        <div className="todolist-area">
          {  renderTodolist(finishlist) }
        </div>


    </div>
  );
}

export default Todo;
