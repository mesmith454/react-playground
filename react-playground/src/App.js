import './App.css';

import Clock from './components/Clock';
import LoginControl from './components/greet_or_log/login_control/LoginControl';
import SplitPane from './components/ui/SplitPane';



function App() {
  
  return (
    <SplitPane 
      left={
        <Clock />
     }
      right={
        <LoginControl />
      } 
    />
  )
}

export default App;
