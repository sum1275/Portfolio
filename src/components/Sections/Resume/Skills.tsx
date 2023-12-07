
import React from 'react'


function SkillGroup() {
  const skills = [
    { name: "C", icon: "/c-icon.png", percentage: 70 },
    { name: "C++", icon: "/c++-icon.png", percentage: 70 },
    { name: "JavaScript", icon: "/js-icon.png", percentage: 70 },
    { name: "HTML", icon: "/html-icon.png", percentage: 60 },
    { name: "CSS", icon: "/css-icon.png", percentage: 60 },
    
    { name: "SQL", icon: "/sql-icon.png", percentage: 65 },
    { name: "React.js", icon: "/react-icon.png", percentage: 75 },
    { name: "Node.js", icon: "/node-icon.png", percentage: 70 },
    { name: "RxJS", icon: "/rxjs-icon.png", percentage: 65 },
    { name: "MongoDB", icon: "/mongodb-icon.png", percentage: 60 },
    { name: "jQuery", icon: "/jquery-icon.png", percentage: 50 },
    { name: "Angular", icon: "/angular-icon.png", percentage: 65 },
    { name: "Angular Material", icon: "/angular-material-icon.png", percentage: 60 },
    { name: "Next.js", icon: "/nextjs-icon.png", percentage: 70 },
    { name: "Tailwind CSS", icon: "/tailwindcss-icon.png", percentage: 65 },
    { name: "Express.js", icon: "/expressjs-icon.png", percentage: 70 },
    { name: "Socket.io", icon: "/socketio-icon.jpg", percentage: 80 },
    // Add more skills as needed
  ];

 
  return (
    <div className="flex  md:flex-row">
      <div className="flex flex-wrap md:justify-between mb-4">
        {skills.map((skill, index) => (
          <div key={index} className="w-20 p-2 m-2 border rounded-md shadow-md text-center">
            {/* Placeholder for the image */}
            <img
              src={skill.icon}
              alt={`${skill.name} Icon`}
              className="w-12 h-12 mx-auto mb-2"
            />
            <span className="text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
  
  
}


export default SkillGroup




  

