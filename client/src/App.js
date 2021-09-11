import logo from './logo.svg';
import './App.css';
import {Box} from '@material-ui/core'
import Home from './components/home/Home'
import Header from './components/Header'
import {Router } from 'react-router-dom';
import Routes from './components/Route';
import History from './components/History';
function App() {
  return (
    
    <Router history={History}>
    <div className="App">
      
        
        <Box style={{marginTop:'64px'}}>
        {Routes}
        </Box>
      

    </div>
    </Router>  
   
  );
}

export default App;
