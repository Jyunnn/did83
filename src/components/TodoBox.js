import { useState } from 'react';

function TodoBox(props) {
    const localData = JSON.parse(localStorage.getItem('todolist'));
    const [ finish, setFinish] = useState(false);

    const a = (e) => {
      console.log(e.currentTarget);
    }

    const finishChange = (e) => {
      setFinish(!finish)
      a(e)
    }

    return (
      <div className="todo" key={props.todo.hash}>
        <p> 序列 : { props.todolist.indexOf(props.todo) } </p>
        <p> ID : { props.todo.id } </p>
        <p> 隨機碼 : { props.todo.hash } </p>
        <p> 內容： { props.todo.todo } </p>
        <button onClick={props.delTodo} value={ props.todo.hash }> DEL </button>
        <input type="checkbox" checked={finish} onChange={finishChange} name="" id=""/>
      </div>
    )
}

export default TodoBox;