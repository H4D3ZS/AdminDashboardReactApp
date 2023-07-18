import React from "react";

import lightning_image from '../../../images/wave_up.svg';

import "./Card.css";

 const CardComponent = ({
  namelabel,
  numberlabel,
  percentage,
  subparagraph,
 
}) => {
  return (
    <div className="card-container">
   
       <div>
       {namelabel && <p className="card-namelabel">{namelabel}</p>}
       </div>
       
      <div>
      <img src={lightning_image} className="card-img"  /> <span/>
      {percentage}%
      
      </div>
      
      {numberlabel && <p className="card-numberlabel">{numberlabel}</p>}
   
      
      {subparagraph && <sub className="card-paragraph">{subparagraph}  </sub>}
   
    </div>
  );
};

export default CardComponent;