
import './App.css';
import AddTask from './Components/AddTask';
import ListTask from './Components/ListTask';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterTask from './Components/FilterTask'


function App() {
  return (
    <div className="App">
      TODO LIST APPLICATION
 <AddTask/>
 <ListTask/>
 <FilterTask/>
    </div>
  );
}

export default App;


