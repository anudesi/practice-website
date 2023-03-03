import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
     
     <form>
     <input type="text" className="search" name="search" placeholder="  Search.."/><FontAwesomeIcon icon={faSearch} />
     
     </form>
    </div>
  );
}

export default App;
