import './App.css';

import Clock from './components/Clock';
import Form from './components/form/Form';
import Toggle from './components/buttons/Toggle';
import LoggingButton from './components/buttons/LoggingButton';
import LoginControl from './components/greet_or_log/login_control/LoginControl';



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

          <div id="buttons">
            <Form />
           <Toggle />
           <LoggingButton />
          </div>

          <div id="greeting">
            <LoginControl />
          </div>
           
          <div id="mail"> 
            
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
