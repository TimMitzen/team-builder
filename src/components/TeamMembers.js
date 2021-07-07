import React from "react";

const TeamMembers = (props) =>{
   return( 
      <>
      {props.team.map((teamMate, index) => {
        return <div className="teamMate" key={index}>
            <h3>{teamMate.name}</h3>
            <h3>{teamMate.email}</h3>
            <h3>{teamMate.role}</h3>
         </div>
        
      })}
      </>
   );
}

export default TeamMembers;