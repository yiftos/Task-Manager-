import React from 'react'
import { connect } from 'react-redux'
import {requestTaskCreation} from "../store/mutations"
import {Link} from 'react-router-dom'

export const TasklList = ({tasks, name, id, createNewTask}) => (
    <div>
        <h3>{name}</h3>
        <div>
            {tasks.map(task=>(
            <Link to =  {`/task/${task.id}`} key = {task.id} >
                <div >{task.name}</div>
            </Link>))}
        </div>
        <button onClick = {()=> createNewTask(id)}>New Task</button>
    </div>
)

const mapStateToProps = (state, ownProps)=>{
    let groupId = ownProps.id;
    return{
        name: ownProps.name,
        id: groupId,
        tasks: state.tasks.filter(task=>task.group === groupId)
    }
}

const mapDispatchToProps = (dispatch, {id})=>{
    return{
        createNewTask(id){
            console.log("creating new task:", id)
            dispatch(requestTaskCreation(id))
        }
    }
}

export const ConnectedTaskList = connect(mapStateToProps, mapDispatchToProps)(TasklList)