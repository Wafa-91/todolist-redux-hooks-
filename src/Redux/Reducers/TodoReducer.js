import { ADD_TASK,DELETE_TASK,DONEONRNOT_TASK,EDIT_TASK,FILTER_TASK } from "../Constants/ActionTypes";

const initialState={tabtodo:[{id:Math.random(),task:"Learning",isdone:false},{id:Math.random(),task:"Shopping",isdone:false},{id:Math.random(),task:"Prepare for presentation",isdone:false}],filterTask:"all"}

const todoReducer=(state=initialState,action)=>
{
switch(action.type)
{
  case ADD_TASK :return{...state,tabtodo:[...state.tabtodo,action.payload],filterTask:"all"}
//   { return traja3 un seul valeur dans une fct alors bch traji3naakthar mn valeur Vous pouvez utiliser des tableaux et des objets et utiliser l'affectation de déstructuration objet/tableau pour obtenir des valeurs individuelles.}
  case DELETE_TASK:  
  { 
//     let tab2 = state.tabtodo.filter(obj => obj.id !== action.payload);
//     return{...state,tabtodo:tab2}
//     var colors = ["red","blue","car","green"];
// var carIndex = colors.indexOf("car")
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// var removed = arr.splice(2,2);
// removed === [3, 4]
// arr === [1, 2, 5, 6, 7, 8, 9, 0]
// */

let index = state.tabtodo.findIndex(x => x.id === action.payload);
state.tabtodo.splice(index, 1);




  }


  case EDIT_TASK:  
  { 
    let newtab = state.tabtodo.map(obj => obj.id === action.payload.id ? { ...obj, task:action.payload.task} : obj);
    return{...state,tabtodo:newtab}

    
  }

   
  case DONEONRNOT_TASK:  
  { 
      let newtab = state.tabtodo.map(obj => obj.id === action.payload ? { ...obj, isdone: !obj.isdone} : obj);
    return{...state,tabtodo:newtab,filterTask:"all"}
  
  }
  

//   case DONE_TASK:  
//   { 
//  let newtab=state.tabtodo.filter(obj=>obj.isdone)
//  return{...state,tabtodo:newtab}
//   }

//   case NOTDONE_TASK:  
//   { 
//     let newtab=state.tabtodo.filter(obj=>!obj.isdone)
//  return{...state,tabtodo:newtab}
//   }
  
  case FILTER_TASK:  
  { 
    
 return{...state,filterTask:action.payload}
  }
  



 

    default:return state
}
}
export default todoReducer

