
import './App.css';
import AddTask from './Components/AddTask';
import ListTask from './Components/ListTask';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterTask from './Components/FilterTask'


function App() {
  
  return (
    
    <div className="App">
      <img src="/imgredux.png" ></img>
      <div className="cont">

 <AddTask/>
 <ListTask/>
 <FilterTask/>
 </div>
    </div>
  );
}

export default App;


