import React from 'react'
import "./team.css"
import Teamcard from "./teamcard"
import Teamcardata from "./teamcardata" 

const team = () => {
  return (
    <div className="work-container_team_autobuddys">
    <div className='spac'>
        <div className="temp_heading_team">
          Team Members
        </div>
        </div>
        <div className='spcaee'>
      <div className="project-heading_team">
        <div className="project-container_team">
          {Teamcardata.map((val,ind)=>{
            return(
                <Teamcard
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                linkedin={val.linkedin}
                />
            )
          })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default team;
