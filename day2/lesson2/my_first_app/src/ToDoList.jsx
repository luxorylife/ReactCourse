import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './ToDoList.css';

const ToDoList = () => {
    const [inputText, setInputText] = useState('');
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
      if (tasks.length === 0) return;
      localStorage.setItem('tasks', JSON.stringify(tasks));  
    }, [tasks])

    useEffect(() => {
      try{
        const tasksFromStorage = localStorage.getItem('tasks');
        if (!tasksFromStorage) return;
        setTasks(JSON.parse(tasksFromStorage));
      } catch (err){
        console.log(err);
        localStorage.removeItem('tasks');
      }
    }, [])

    const add = () => {
        if (inputText.trim() === ''){
            setInputText('');
            return alert('Задача пуста!');
        } 

        if (
            tasks.some(task => task.title.toLowerCase().trim() === inputText.toLowerCase().trim())
        ) {
            setInputText('');
            return alert('Такая задача уже есть в списке!');
        }
         
        setTasks([...tasks, { id: uuidv4(), title: inputText}]);
        setInputText('');
    }

    const del = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
        setInputText('');
    }

    //console.log(tasks);

    return (
        <div className="todo-wrapper">
            <input 
                type="text" 
                placeholder="Название задачи" 
                value={inputText}
                onChange={(event) => setInputText(event.target.value) }/>
            <button onClick={add}>Добавить задачу</button>
            <ul>
                {tasks.map((task) => {
                    return (
                        <li key={task.id}>
                            {task.title} 
                            <button className="btn-delete" onClick={() => del(task.id)}>Удалить</button>
                        </li>
                    );
                })}
            </ul>    
        </div>
    );
}

export default ToDoList;