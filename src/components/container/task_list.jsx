import React from 'react'
// import PropTypes from 'prop-types'
import { Task } from '../../models/task_clases'
import { LEVELS } from '../../models/levels.enum'
import TaskComponent from '../pure/task'

function TaskListComponent(props) {
    const defaultTask = new Task('Example', 'Default Description', false, LEVELS.NORMAL)

    // const changeState = (id) => {
    //     console.log('TODO: Cambiar estado de una tarea.')
    // }

    return (
        <div>
            <div>
                <h1>
                    Your tasks:
                </h1>
            </div>
            {/* Crear un for para renderizar las tareas */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    )
}

export default TaskListComponent
