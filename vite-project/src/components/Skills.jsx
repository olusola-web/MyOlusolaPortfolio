import React from 'react'
import { skills } from '../data';
const Skills = () => {
    return (
        <>
          {skills.map(({ title }, index) => {
            return (
              <li className="skills__item" key={index}>
                <span className="skills__title">{title}</span>
              </li>
            ); 
          })}
        </>
      );
}

export default Skills
