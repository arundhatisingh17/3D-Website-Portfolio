
import './App.css'
import Intro from './components/Intro/intro.jsx'
import Home from './components/Home/home.jsx'
import { useState } from 'react';



function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => { 
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark');
    console.log(isDarkMode);
  };

  return (
    <div>
      <Intro toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Home isDarkMode = {isDarkMode}/>
      {/* <Skills /> */}
    </div>
  );
}

export default App
