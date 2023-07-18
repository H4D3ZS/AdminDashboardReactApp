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
import Logo from '../../../images/logo.svg';




const SideBarLeft = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        // {
        //     path:"/",
        //     name:"Dashboard",
        //     icon:<FaTh/>
        // },
        {
            path:"/Activity_Feed",
            name:"Activit yFeed",
            icon:<FaTh/>
        },
        {
            path:"/Applications",
            name:"Applications",
            icon:<FaRegChartBar/>
        },
        {
            path:"/Job_Listing",
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
          name:"Referral Program",
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
           <div style={{width:   "200px" }} className="SideBarLeft">
               <div className="top_section">
               <img src={Logo} alt="Person 2" />
                   {/* <h1 style={{display:  "block"}} className="logo">Logo</h1> */}
                   <div style={{marginLeft: "50px"}} className="bars">
             
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                       
                           <div  style={{display :"block"}} className="link_text"> {item.icon}  {item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default SideBarLeft;