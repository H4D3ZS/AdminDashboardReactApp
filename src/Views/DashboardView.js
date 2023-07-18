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

import BarChart from '../components/Charts/BarChart';
import BarChart2 from '../components/Charts/Barchart2';
import DoughnutChart  from '../components/Charts/DoughnutChart';
import LineChart from '../components/Charts/LineChart';
import ReferalTrendChart from '../components/Charts/ReferalSourcesTrendChart';
import '../App.css'

import 'tailwindcss/tailwind.css';

import CardView from  '../components/ViewComponent/CardComponent/Card';

const DashBoardView = () => {
  return (

    <div class="main-container">

      {/* Main Container Div */}

      <div className='sidebar-container'> 
      {/* SideBar */}
   
      <div className='sidebar-items'>
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

      </div>




      <div class="dashboard-container">

        
        <div className='cardview-container'>

        <div class="cardview-list">
              <CardView
                namelabel="Employee Participation"
                numberlabel="126"
                percentage="2.5"
                image
                subparagraph={" vs last month"}
              />
            </div>

            <div class="cardview-list">
              <CardView
                namelabel="Employee Participation"
                numberlabel="126"
                percentage="2.5"
                image
                subparagraph={" vs last month"}
              />
            </div>

            <div class="cardview-list">
              <CardView
                namelabel="Employee Participation"
                numberlabel="126"
                percentage="2.5"
                image
                subparagraph={" vs last month"}
              />
            </div>

            <div class="cardview-list">
              <CardView
                namelabel="Employee Participation"
                numberlabel="126"
                percentage="2.5"
                image
                subparagraph={" vs last month"}
              />


<div class="chart-container">

{/* Charts Here */}

<BarChart />

<BarChart2 />

<DoughnutChart />
<LineChart />
<ReferalTrendChart />
</div>
            </div>
            
        </div>

     


      </div>

   

     {/* End of Main Container */}

    </div>



   
  )
}


  export default DashBoardView;