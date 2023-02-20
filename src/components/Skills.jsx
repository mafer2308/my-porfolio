import React from 'react';
import '../styles/skills.css'


const Skills = () => {
  return (
    <div className='container-skills'>
      <h1>My Skills</h1>
      <div className='skills-content'>
        <ul className='skills'>
          <li style={{"--color":"#ef436b"}}>
            <span className='base'></span>
            <span className='title'>HTML5</span>
            <span className='icon'> <i className="fa-brands fa-html5"></i> </span>
          </li>
          <li style={{"--color":"#0351b5"}} >
            <span className='base'></span>
            <span className='title'>CSS</span>
            <span className='icon'><i className="fa-brands fa-css3-alt"></i></span>
          </li>
          <li style={{"--color":"#ffe519"}} >
            <span className='base'></span>
            <span className='title'>JavaScript</span>
            <span className='icon'><i className="fa-brands fa-js"></i></span>
          </li>
          <li style={{"--color":"#00e2ef"}} >
            <span className='base'></span>
            <span className='title'>React</span>
            <span className='icon'><i className="fa-brands fa-react"></i></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;