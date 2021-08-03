import { useState } from 'react';
import search from './search.svg';
import TodoBox from './components/TodoBox'
import './css/todo.css';

function Todo() {
  const [todo, setTodo] = useState({value:'', id: 0, hash: Date.now()});
  const [todolist, setTodolist] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    if(todo.value === ''){
      return
    }
    setTodolist ((old)=>{
      return [...old, todo]
    });
		setTodo({value:'',id: todo.id+=1, hash: Date.now()})
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
		console.log(hash, list);
  }

  const renderTodolist = (array) => {
    if (todolist.length === 0){
      return (
          <p> 空白 </p>
      )
    }	else {
			return (
				array.map((v)=>{ 
					return (
						<TodoBox key={v.hash} delTodo={delTodo} handleFinishChange={handleFinishChange} {...v}/>
					) 
				})
			)
		}
  }

  const filiterTodos = () => {
    return todolist.filter((v)=>{
      return v.finish === true
    })
  }

  return (
    <div className="App">
			<form className="todo-form">
				<input type="text" placeholder="請輸入文字" value={todo.value} onChange={(e)=>{setTodo({...todo, value: e.target.value })}}></input>
				<button onClick={ addTodo }>
					<img src={search} alt="search-icon"/>
				</button>
			</form>

			<div className="todolist-area">
				{  renderTodolist(todolist) }
			</div>
			---
			<div className="todolist-area">
				{  renderTodolist(filiterTodos())}
			</div>
    </div>
  );
}

export default Todo;
