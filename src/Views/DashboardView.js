import React from 'react';
import Sidebar from '../components/ViewComponent/SideBarComponents/SideBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ActivityFeed from '../components/ViewComponent/SideBarComponents/ActivityFeedComponent';
import Applications from '../components/ViewComponent/SideBarComponents/ApplicationComponent';
import Job_listing from '../components/ViewComponent/SideBarComponents/JobComponent';
import Employees from '../components/ViewComponent/SideBarComponents/EmployeeComponent';
import Payouts from '../components/ViewComponent/SideBarComponents/PayoutComponent';
import Referal_Program from '../components/ViewComponent/SideBarComponents/ReferralComponent';
import Company from '../components/ViewComponent/SideBarComponents/CompanyComponent';
import LeaderBoard from '../components/ViewComponent/SideBarComponents/LeaderboardComponent';
import BarChart from '../components/BarCharts/BarChart';
import '../App.css'

const DashboardViewPage = () => {

  return (


    <div className="admin-dashboard">
    <div className="sidebar">
      {/* Sidebar content */}
      <BrowserRouter>
        <Sidebar>
          <Routes>
   <Route path="/ActivityFeed" element={<ActivityFeed />} />
      <Route path="/Applications" element={<Applications />} />
   <Route path="/Job_listing" element={<Job_listing />} />
      <Route path="/Employees" element={<Employees />} />
   <Route path="/Payouts" element={<Payouts />} />
       <Route path="/Referal_Program" element={<Referal_Program />} />
    <Route path="/Company" element={<Company />} />
     <Route path="/LeaderBoard" element={<LeaderBoard />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>

    <div className="chart-container">
      <BarChart />
    </div>

    <div className="person-list">
      {/* Person items */}
    </div>
  </div>
);
};



//   <div className="admin-dashboard">
//   <div className="sidebar"> {/* Sidebar on the left */}
//     {/* Add your sidebar content here */}
   
//     <BrowserRouter>
//     <Sidebar>
//       <Routes>
//         <Route path="/ActivityFeed" element={<ActivityFeed />} />
//         <Route path="/Applications" element={<Applications />} />
//         <Route path="/Job_listing" element={<Job_listing />} />
//         <Route path="/Employees" element={<Employees />} />
//         <Route path="/Payouts" element={<Payouts />} />
//         <Route path="/Referal_Program" element={<Referal_Program />} />
//         <Route path="/Company" element={<Company />} />
//         <Route path="/LeaderBoard" element={<LeaderBoard />} />

//         <Route path="/BarChart" element={<BarChart />} />

        
//       </Routes>

//     </Sidebar>

//   </BrowserRouter>


//   </div>

//   <div>
//   Hello
// </div>
//   <div className="person-list"> {/* List of person items on the right */}
//     <div className="person-item">
//       <img src="person1.svg" alt="Person 1" />
//       <span className="person-name">John Doe</span>
//     </div>
//     <div className="person-item">
//       <img src="person2.svg" alt="Person 2" />
//       <span className="person-name">Jane Smith</span>
//     </div>
//     {/* Add more person items as needed */}
//   </div>

// <div>
//   Hello
// </div>

// </div>






 export default DashboardViewPage;