import './App.css';

import Clock from './components/Clock';
import Form from './components/form/Form';
import Toggle from './components/buttons/Toggle';
import LoggingButton from './components/buttons/LoggingButton';

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
           <Form />
           <Toggle />
           <LoggingButton />
        </div>

      </div>
    </div>
  );
}

export default App;
