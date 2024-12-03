import Table from './components/Table/index';
import {usersArray} from "./data";
import './App.css';

function App() {
 
  return (
    <div className='tabWrap'>      
      <Table users={usersArray}/>
    </div>
  );
}
export default App;
