import React,{ useState }  from 'react'
import { useDispatch } from 'react-redux';
import {deleteTask,doneORnot,editTask} from '../Redux/Actions/TodoAction'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";
import { Modal,Button  } from 'react-bootstrap';
const Task = ({todotask}) => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
const [inputTodo, setinpuTodo] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <div className="task">
          
            {/* {todotask.id} */}
            
      
    <input type="text" value={todotask.task} style={{textDecoration:todotask.isdone?'line-through red':'none'}} />
    {/* className={todotask.isdone? 'RED Done' : ''} 
    .RED Done{
    text-decoration: line-through red;
} */}
<button  onClick={()=>dispatch(doneORnot(todotask.id))}style={{ color: todotask.isdone?'red':'green'}} > <IoCheckmarkDoneSharp /></button>
     <button  onClick={handleShow}>
     <AiFillEdit />
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>NEW TASK </Modal.Title>
        </Modal.Header>
        <Modal.Body><input placeholder="Enter new task" onChange={(e)=>setinpuTodo(e.target.value)}/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{dispatch(editTask({id:todotask.id,task:inputTodo})); handleClose()}}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>







    <button onClick={()=>dispatch(deleteTask(todotask.id))} style={{ color: "red" }}><IoClose /></button>
    {/* <button onClick={()=>dispatch(editTask({id:2,task:"wafa"}))}>ediit</button> */}
    
        </div>
    )
}

export default Task
