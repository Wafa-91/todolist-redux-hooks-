import React from 'react'
import{useDispatch,useSelector} from 'react-redux'
import{doneTask,notdoneTask,filterTask} from '../Redux/Actions/TodoAction'
import { Button  } from 'react-bootstrap';
const FilterTask = () => {
  const dispatch = useDispatch()
  const tab_task = useSelector(state => state.tabtodo)
    return (
        <div className="filtertask">
            
            {/* <button onClick={()=>dispatch(doneTask())}>IS DONE</button> */}
            <Button  variant="danger"onClick={()=>dispatch(filterTask("isDone"))}>IS DONE</Button>
         
            <Button variant="success" onClick={()=>dispatch(filterTask("notDone"))}>NOT DONE</Button>
            <Button  variant="warning" onClick={()=>dispatch(filterTask("all"))}>ALL</Button>
           
        </div>
    )
}

export default FilterTask
