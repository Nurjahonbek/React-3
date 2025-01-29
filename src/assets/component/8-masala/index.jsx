import { useState } from 'react';

function Masala8() {
    const [tasks, setTasks] = useState([])
    const [newTask, setTask] = useState([])
function addTask() {
    if (newTask.trim() != '') {
        setTasks([...tasks, newTask])
        setTask([])
    }
}
function deleteTask(index) {
    setTasks(tasks.filter((_, taskIndex) => taskIndex != index))
}
    return (
    <div>
        <input type="text" value={newTask}
        onChange={(e) => setTask(e.target.value)} placeholder="todo"/>
        <button onClick={addTask}>qoshish</button>
        <ul>
        {tasks.map((task, index) => (
            <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>ochirish</button>
            </li>
        ))}
        </ul>
    </div>
)
}

export default Masala8
