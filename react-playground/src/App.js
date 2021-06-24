import './App.css';
import Clock from './components/Clock';

function App() {
  const element = <h1> Sup Fjuckers </h1>
 
  return (
    <div>
      <div id="root">

        <div id="header">

          <div id="time">
            <Clock />
          </div>

          <div id="aggrogreet">
            {element}
            <p> I have shit to say</p>
          </div>
        </div>

        <div id="body">
           
        </div>

      </div>
    </div>
  );
}

export default App;
