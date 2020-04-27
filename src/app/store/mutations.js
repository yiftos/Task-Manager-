export const REQUEST_TASK_CREATIONS = 'REQUEST_TASK_CREATIONS'
export const CREATE_TASK = 'CREATE_TASK'
export const SET_TASK_COMPLETE = `SET_TASK_COMPLETE`;
export const SET_TASK_GROUP = `SET_TASK_GROUP`;
export const SET_TASK_NAME = `SET_TASK_NAME`;

export const requestTaskCreation = (groupID)=>({
    type:REQUEST_TASK_CREATIONS,
    groupID
});

export const createTask = (taskID, groupID, ownerID)=>({
    type:CREATE_TASK,
    taskID,
    groupID,
    ownerID
});

export const setTaskCompletion = (id, isComplete = true)=>({
    type:SET_TASK_COMPLETE,
    taskID:id,
    isComplete
});

export const setTaskGroup = (taskID, groupID)=>({
    type:SET_TASK_GROUP,
    taskID,
    groupID
});

export const setTaskName = (taskID, name)=>({
    type:SET_TASK_NAME,
    taskID,
    name
});