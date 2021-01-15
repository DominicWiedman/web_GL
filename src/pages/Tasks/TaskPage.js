import React, { useEffect} from "react";
import {inject, observer} from "mobx-react";
import './TasksPage.css'

export const TaskPage = inject('store')(observer((props) => {

    useEffect(() => {
        props.store.tasksStore.loadTasks()
    }, []);

    if (props.store.tasksStore.loader) {
        return (
            <h1>Загрузка данных...</h1>
        )
    } else {
        return (
            <div className='tasks'>
                <div className='test'>
                    <input value={props.store.tasksStore.addInput}  name='addInput' onChange={(value) => props.store.tasksStore.setAddInput(value)}
                           type='text' className= 'addInput' placeholder='Напишите свою задачу...'/>
                           <div onClick={props.store.tasksStore.sendTodo} className='addButton'>+</div>

                </div>

                {
                    props.store.tasksStore.tasks.map((todo, index) => (
                        <div key={todo.id} className='item'>{todo.body}  <input type="checkbox" checked={todo.done}  onChange={(event) => props.store.tasksStore.checkTodo(todo, event)} /></div>
                    ))
                }


            </div>
        )
    }

}));