import React, { useState } from 'react';
import SideBarLeft from '../components/ViewComponent/SideBarComponents/SideBarLeft';
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
import BarChart2 from '../components/BarCharts/Barchart2';
import DoughnutChart  from '../components/BarCharts/DoughnutChart';
import LineChart from '../components/BarCharts/LineChart';
import ReferalTrendChart from '../components/BarCharts/ReferalSourcesTrendChart';
import '../App.css'


import 'tailwindcss/tailwind.css';



const DashBoardView = () => {
  return (
    <div>

    <div class="sidebar"> 
           <BrowserRouter>
         <SideBarLeft>
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
         </SideBarLeft>
       </BrowserRouter>
      
     </div>



  <a class="active" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>


  <a href="#about">About</a>

  <div class="content">

    <BarChart/>

    <BarChart2/>

    <DoughnutChart/>
    <LineChart />
    <ReferalTrendChart/>
 
  </div>
</div>



  )
};

export default DashBoardView;