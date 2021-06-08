
import React ,{ useState } from 'react'
import { useDispatch } from 'react-redux';
import {addTask} from '../Redux/Actions/TodoAction'
import { IoIosAddCircle} from "react-icons/io"
// addtask avec {}car pas default

const AddTask = () => {
    const [inputdo, setinputdo] = useState("");
    const add=()=>
    {if (!inputdo) return;
        dispatch(addTask({ id:Math.random(),task: inputdo, isdone: false }));
        setinputdo("")
    }
    const dispatch = useDispatch();
    const weekday=["Sunday","Monday","Thuesday","Wednesday","Thursday","Friday","Saturday"]
    let day=weekday[new Date().getDay()]
    let dt=new Date().toLocaleDateString();
    let time=new Date().toLocaleTimeString();
    return (
        <div  className="addtask">
            <p>{day} :{dt}</p>
            <p>{time}</p>
            <input  type="text"  onChange={(e)=>setinputdo(e.target.value)} value={inputdo} placeholder="NEW TASK TO DO"/>
            <button onClick={add}style={{ color: "green" }}>< IoIosAddCircle/></button>

        </div>
    )
}

export default AddTask

