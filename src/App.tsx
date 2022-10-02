import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

type PropsType = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

function App() {
    const [todos, SetTodos] = useState<Array<PropsType>>([])
    console.log(todos)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => SetTodos(json))
    }, [])



    const onClickHandler = () => {
        SetTodos([])
    }

    return (
        <div className="App">
            <button onClick={onClickHandler}>CLEAN POSTS</button>
            <ul>
                {todos.map(el => {
                    return (
                        <li key={el.id}>
                            <span>{el.userId}</span>
                            <span>{el.title}</span>
                            <span>{el.completed}</span>
                        </li>
                    )
                })}
            </ul>

        </div>
    );
}

export default App;
