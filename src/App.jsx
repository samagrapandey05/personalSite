import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AboutMe from './AboutMe.jsx'
import Menu from './Menu.jsx'
import Projects from './Projects.jsx'
import Experience from './Experience.jsx'
import { useRef } from 'react';
import { forwardRef } from 'react';
import { useEffect } from 'react'

function App() {
  const projectElement = useRef(null)
  const aboutElement = useRef(null)
  
  const [autoScroll, setAutoScroll] = useState(false)

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const position = Math.ceil(
      (scrollTop / (scrollHeight - clientHeight)) * 100
    );
    if(autoScroll){
      
      console.log(position);
    }
    else{
      setAutoScroll(true)
      if(position > 0 && position < 25){
        projectElement.current.scrollIntoView({ 
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        })
      }
      if(position >= 25 && position < 50){
        aboutElement.current.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        })
      }
      if(position > 50 && position < 75){
        expElement.current.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        })
      }
      if(position >= 75){
        projectElement.current.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        })
      }
      setAutoScroll(false)
    }
    
  }

  return (
    <div>
      <Menu aboutReference = {aboutElement} projectReference = {projectElement} />
      <div className='pageBody'>
        <AboutMe aboutReference = {aboutElement} projectReference = {projectElement}/>
        <Projects projectReference = {projectElement} />
      </div>
    </div>
  )
}

export default App
