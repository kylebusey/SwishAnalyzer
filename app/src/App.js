import './App.css';
import cslogo from "./assets/cs2-logo-scaled.jpg";
import soldier from "./assets/soldier.jpg";

function App() {
  return (
    <div className="body-main">
      
      <div className="title-info">
        <h1 className="title">Swish Analyzer</h1>
        <img src={cslogo} alt="CS2 Logo"/>
        <h2 className="subtitle">Version 0.1</h2>
      </div>

      <div className="demo-data">
        <button className="upload-button" id="upload">Upload Demo</button>
        <p>Simply select your demo file and see the 
            most crucial stats for your game.</p>
      </div>

      <div className="footer">

      <img src={soldier} alt="CS2 Soldier"/>
      <img src={soldier} alt="CS2 Soldier"/>
      <img src={soldier} alt="CS2 Soldier"/>
      <img src={soldier} alt="CS2 Soldier"/>
      <img src={soldier} alt="CS2 Soldier"/>

      </div>
    </div>
  );
}

export default App;
