export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    // 중괄호로 묶어서 props를 받아온다.
    return (
        <li>
            <label>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={(e) => toggleTodo(id, e.target.checked)}
                />
                {title}
            </label>
            <button onClick={() => deleteTodo(id)} className="btn btn-danger">
                Delete
            </button>
        </li>
    );
}
