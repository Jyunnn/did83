
function TodoBox(props) {
  console.log(props);
    return (
      <div className="todo" key={props.todo.hash}>
        <p> 序列 : { props.todolist.indexOf(props.todo) } </p>
        <p> ID : { props.todo.id } </p>
        <p> 隨機碼 : { props.todo.hash } </p>
        <p> 內容： { props.todo.todo } </p>
        <button onClick={props.delTodo} value={ props.todo.hash }> DEL </button>
      </div>
    )
}

export default TodoBox;