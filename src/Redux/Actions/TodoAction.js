import{ADD_TASK, DELETE_TASK ,DONEONRNOT_TASK,DONE_TASK,NOTDONE_TASK,EDIT_TASK,FILTER_TASK} from '../Constants/ActionTypes'

export const addTask =(payload)=> {
    return {type: ADD_TASK,
            payload}
  }

  export const deleteTask=(payload)=>
  {
      return { type:DELETE_TASK,
    payload}
  }

  export const doneORnot=(payload)=>
  {
      return { type:DONEONRNOT_TASK,
    payload}
  }


  export const editTask=({id,task})=>
  {
      return { type:EDIT_TASK,
    payload:{id,task}}
  }


  export const doneTask=(payload)=>
  {
      return { type:DONE_TASK,
    payload}
  }


  export const notdoneTask=(payload)=>
  {
      return { type:NOTDONE_TASK,
    payload}
  }

  export const filterTask=(payload)=>
  {
      return { type:FILTER_TASK,
    payload}
  }

