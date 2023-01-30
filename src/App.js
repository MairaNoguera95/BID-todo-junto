
import './App.css';
import PersonaCard from './components/PersonaCard';
function App() {
  return ( 
    <div className="App">
      <PersonaCard lastName= "Doe" fistName= "Jane" age={"45"} hairColor="Black"/>
      <PersonaCard lastName= "Smith" fistName= "John" age={"88"} hairColor="Black"/>
    </div>
  );
}

export default App;
