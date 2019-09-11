import React , {useState} from 'react'; 
import Create from "./components/Create"
import TeamMembers from "./components/TeamMembers"
import './App.css';


function App() {
 const [team, setTeam] = useState([{name: "", email: "", role:"" }]);
  
  
  
  return (
    <div className="App">
     <Create team={team} setTeam={setTeam}/>
     <TeamMembers team={team} />
      
    </div>
  );
}

export default App;
