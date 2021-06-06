import React from 'react'
import {useSelector } from 'react-redux';
 import Task from './Task'
 


const ListTask = () => {
    const tab=useSelector(state=>state.tabtodo)
    const filterTask=useSelector(state=>state.filterTask)
 
    return (
        <div className="listtask">
                
                
                {filterTask==="isDone"?tab.filter(obj=>obj.isdone).map(el=> <Task todotask={el}/>):null}
                {filterTask==="notDone"?tab.filter(obj=>!obj.isdone).map(el=> <Task todotask={el}/>):null}
                {filterTask==="all"?tab.map(el=> <Task todotask={el}/>):null}


                
                
        </div>
    )
}

export default ListTask
