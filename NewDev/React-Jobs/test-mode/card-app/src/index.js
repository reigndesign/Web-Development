import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
    display: "inline-flex",
    padding: "8px 20px",
    ml: "10px",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
    display: "inline-flex",
    padding: "8px 20px",
    ml: "10px",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
    display: "inline-flex",
    padding: "8px 20px",
    ml: "10px",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
    display: "inline-flex",
    padding: "8px 20px",
    ml: "10px",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
    display: "inline-flex",
    padding: "8px 20px",
    ml: "10px",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
    display: "inline-flex",
    padding: "8px 20px",
    ml: "10px",
  },
];


// function App() {
//   return (
//     <div className="card">
//       <Avatar />
//       <div className="data">
//         <Intro />
//         {/* Should contain one Skill component
//         for each web dev skill that you have,
//         customized with props */}
//         <SkillList />
//       </div>
//     </div>
//   );
// }

// function Avatar() {
//   return <img className="avatar" src="images/pp.png" alt="Adetunji Adeleye" />;
// }

// function Intro() {
//   return (
//     <div>
//       <h1>Adetunji Adeleye</h1>
//       <p>
//       I am an IT support specialist, System engineer. I’m currently learning and developing 
//       my skills in Cloud and Software Engineering with;
//       </p>
//     </div>
//   );
// }

// function SkillList() {
//   return (
//     <div className="skill-list">
//       {skills.map((skill) => (
//         <Skill skill={skill.skill} color={skill.color} level={skill.level} />
//       ))}
//     </div>
//   );
// }

// function Skill({ skill, color, level }) {
//   return (
//     <div className="skill" style={{ backgroundColor: color }}>
//       <span>{skill}</span>
//       <span>
//         {level === "beginner" && "👶"}
//         {level === "intermediate" && "👍"}
//         {level === "advanced" && "💪"}
//       </span>
//     </div>
//   );
// }

function App() {
  return (
    <>
      <div className='container'>
      <div className='card'>
        <Avatar />
        <div className='card--details'>
        <Intro />
        </div>
      </div>
      <CardSkills />
    </div>
    
    </>
    
  )
}


function Avatar() {
  return (
        <div className='card--img'>
            <img src='/images/pp.png' alt='Card Picture' />
        </div>
  )
}

function Intro() {
  return (
      <div>
        <h2>Adetunji Adeleye</h2>
        <h4>Full Stack Engineer</h4>
        <p>
            I work as an IT Support Specialist and Software Engineer, diving into the world of front-end and back-end development. I may be more of an introvert, but I love engaging in meaningful conversations and exploring new ideas.
        </p>
      </div>
  )
}

function CardSkills() {
  return (
    <div className='card--skills'>
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} display={skill.display} padding={skill.padding} ml={skill.ml} />
      ))}
    
    </div>

  )
}

function Skill({skill, color, level, display, padding, ml}) {
  return(
    <div className='skills' style={{ backgroundColor: color, padding: padding, display: display, margin: ml, }} >
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
        </span>
    </div>
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);