import { useState } from 'react';

export function NewItemForm({ onSubmit }) {
    const [newItem, setNewItem] = useState('');
    // destructuring assignment
    // useState는 배열을 반환한다. 첫번째 요소는 상태값, 두번째 요소는 상태값을 변경하는 함수
    // 상태값을 변경하는 함수는 상태값을 변경하는 함수를 호출할 때마다 컴포넌트를 다시 렌더링한다.

    // setNewItem("Hello")

    function handleSubmit(e) {
        e.preventDefault(); // 기본 동작을 막는다. -> page reload 방지

        if ((newItem === '') | (newItem === 'default')) return; // 빈 문자열이거나 default 값이면 함수 종료
        onSubmit(newItem);
        setNewItem('');
        // 상태값을 변경하는 함수를 호출한다. -> 상태값이 변경되면 컴포넌트를 다시 렌더링한다.
    } // handleSubmit adds a new todo item to the list
    // 기존 배열에 새로운 요소를 추가하는 방법

    return (
        <form onSubmit={handleSubmit} classname="new-item-form">
            <div calssname="form-row">
                <label htmlFor="new-item-input">New Item</label>
                <input
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)} // event 객체를 받아서 setNewItem 실행
                    type="text"
                    id="item-input"
                />
            </div>
            <button classname="btn">Add</button>
        </form>
    );
}
