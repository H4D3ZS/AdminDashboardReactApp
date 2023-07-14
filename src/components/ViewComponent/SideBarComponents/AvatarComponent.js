import React from 'react';
import Person from '../../../images/person.svg';


const  AvatarComponent= () => {
    return (
        <div>
        <div className="person-list"> {/* List of person items on the right */}
        <div className="person-item">
          <img src={Person} alt="Person 1" />
          <span className="person-name">John Doe</span>
        </div>
        <div className="person-item">
          <img src={Person} alt="Person 2" />
          <span className="person-name">Jane Smith</span>
        </div>
        {/* Add more person items as needed */}
      </div>
        </div>
    );
};

export default AvatarComponent;