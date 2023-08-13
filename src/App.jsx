import { useState } from 'react';
import './css/styles.css';



export default function App() {
    const [newItem, setNewItem] = useState('');
    const [todos, setTodos] = useState([]);
    // setNewItem("Hello")

    function handleSubmit(e) {
        e.preventDefault();

        setTodos((currentTodos) => {
            return [
                ...currentTodos, // spread operator
                {
                    id: crypto.randomUUID(),
                    title: newItem,
                    completed: false,
                },
            ];
        });
    }

    function toggleTodo(id,completed) {
      setTodos((currentTodos) => {
        return currentTodos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo, // spread operator
              completed: completed}
        }
          return todo
        });
      })
    }

    function deleteTodo(id) {
      setTodos(currentTodos => {
        return currentTodos.filter(todo => todo.id !== id) // 현재 배열에서 선택한 id 제외
      })
    }

    console.log(todos);

    return (
        <>
            <form onSubmit={handleSubmit} className="new-item-form">
                <div calssName="form-row">
                    <label htmlFor="new-item-input">New Item</label>
                    <input
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)} // event 객체를 받아서 setNewItem 실행
                        type="text"
                        id="item-input"
                    />
                </div>
                <button className="btn">Add</button>
            </form>
            <h1 className="header">Grocery List</h1>
            <ul className="list">
                {todos.length === 0 && "No todos"}
                {todos.map((todo) => {
                    return (
                        <li key={todo.id}>
                            // map을 통해 배욜된 배열의 각 요소에 대해 key를 지정해줘야함
                            <label>
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={(e) => toggleTodo(todo.id, e.target.checked)} // event 객체를 받아서 setNewItem 실행
                                />
                                {todo.title}
                            </label>
                            <button onClick={()=> deleteTodo(todo.id)} className="btn">Delete</button> // 반드시 함수를 click event로 전달해야 한다.
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
