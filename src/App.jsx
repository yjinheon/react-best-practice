import { useEffect, useState } from 'react';
import './css/styles.css';
import { NewItemForm } from './components/todo/NewItemForm';
import { TodoList } from './components/todo/TodoList';

export default function App() {
    //const [todos, setTodos] = useState([]); // useState는 배열을 반환한다. 첫번째는 state, 두번째는 state를 변경하는 함수

    const [todos, setTodos] = useState(() => {
        const lacalValue = localStorage.getItem('ITEMS');
        if (lacalValue == null) {
            return [];
        }
        return JSON.parse(lacalValue); // local storage에 저장된 값을 가져온다.
    });
    // to do list를 저장할 state

    // 배열의 값이 바뀔 때마다 useEffect 호출
    // 구조 : useEffect(함수, [배열])

    useEffect(() => {
        localStorage.setItem('ITEMS', JSON.stringify(todos)); // todo 를 local storage에 저장
    }, [todos]);

    function addTodo(title) {
        // 새로운 todo를 추가하는 함수
        setTodos((currentTodos) => {
            return [
                ...currentTodos, // spread operator
                {
                    id: crypto.randomUUID(),
                    title: title,
                    completed: false,
                },
            ];
        });
    }

    function deleteTodo(id) {
        // 전달한 id를 제외하는 setTodo 호출

        setTodos((currentTodos) => {
            return currentTodos.filter((todo) => todo.id !== id); // 현재 배열에서 선택한 id 제외
        });
    }

    function toggleTodo(id, completed) {
        // 완료항목 토글
        setTodos((currentTodos) => {
            return currentTodos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo, // spread operator
                        completed: completed, // state는 기본적으로 const이기 때문에 변경이 불가능하다. 따라서 새로운 객체를 생성해서 변경해야 한다.
                    };
                }
                return todo;
            });
        });
    }

    return (
        <>
            <NewItemForm onSubmit={addTodo} />
            <h1 className="header">Todo List</h1>
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </>
    );
}
