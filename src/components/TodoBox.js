function TodoBox(props) {

    return (
        <div className="todo">
            <input type="checkbox" checked={props.isfinish} onChange={ ()=> props.finishChange(props.hash)} />
            <p> 序列 : { props.id } </p>
            <p> 時間戳 : { props.hash } </p>
            <p> { props.todo } </p>
            <button onClick={props.delTodo} value={ props.id }> DEL </button>
        </div>
    )
}

export default TodoBox;