import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task_clases'

function TaskComponent(props) {

    const { name, description, level, completed } = props.task;

    return (
        <div>
            <h2>
                nombre: {name}
            </h2>
            <h3>
                Descripcion: {description}
            </h3>
            <h4>
                Level: {level}
            </h4>
            <h5>
                this task is: {completed ? 'Completed' : 'Pending'}
            </h5>
        </div>
    )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default TaskComponent
