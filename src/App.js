import Sidebar from './components/Sidebar';
import Projects from './components/Projects';
import Header from './components/Header'

import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar/>
      <div className='header-projects-container'>
       <Header/>
       <Projects/>
      </div>
     
    </div>
  );
}

export default App;
