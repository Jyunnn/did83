import { useState } from 'react';

function TodoBox(props) {
	const [isfinish, setIsfinish] = useState(false);

	const handleFinishChange = function (a) {
		setIsfinish(!isfinish);
		console.log(a);
	}

	return (
		<div className="todo">
			<input type="checkbox" checked={isfinish} onChange={()=>handleFinishChange(isfinish)} />
			<p> 序列 : {props.id} </p>
			<p> 時間戳 : {props.hash} </p>
			<p> {props.value} </p>
			<button onClick={props.delTodo} value={props.id}> DEL </button>
		</div>
	)	
}

export default TodoBox;