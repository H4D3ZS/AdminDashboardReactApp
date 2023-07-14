import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';




const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        // {
        //     path:"/",
        //     name:"Dashboard",
        //     icon:<FaTh/>
        // },
        {
            path:"/ActivityFeed",
            name:"ActivityFeed",
            icon:<FaUserAlt/>
        },
        {
            path:"/Applications",
            name:"Applications",
            icon:<FaRegChartBar/>
        },
        {
            path:"/Job_listing",
            name:"Job listing",
            icon:<FaCommentAlt/>
        },
        {
            path:"/Employees",
            name:"Employees",
            icon:<FaShoppingBag/>
        },
        {
            path:"/Payouts",
            name:"Payouts",
            icon:<FaThList/>
        },
        {
          path:"/Referal_Program",
          name:"Referal_Program",
          icon:<FaThList/>
      },

      {
        path:"/Company",
        name:"Company",
        icon:<FaThList/>
    },
    {
      path:"/LeaderBoard",
      name:"LeaderBoard",
      icon:<FaThList/>
  },

    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;