import React, { useEffect} from "react";
import {inject, observer} from "mobx-react";


export const TaskPage = inject('store')(observer((props) => {

    useEffect(() => {
        props.store.loadTasks()
    }, []);

    if (props.store.loader) {
        return (
            <h1>Загрузка данных...</h1>
        )
    } else {
        return (
            <div className='item'>
                {
                    props.store.tasks.map((task, index) => (
                        <div>{task.body}</div>
                    ))
                }
            </div>
        )
    }

}));