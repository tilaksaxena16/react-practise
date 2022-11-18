import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Pagelogo } from './Components/Pagelogo/Pagelogo';
import { Header } from './Components/Header/Header';
import { Sidebardashboard } from './Components/Sidebar/Siderbardashboard/Sidebardashboard';
import { Sidebarlayout } from './Components/Sidebar/Sidebarlayout/Sidebarlayout';
import { Sidebarcrafted } from './Components/Sidebar/Sidebarcrafted/Sidebarcrafted';
import { Sidebarpages } from './Components/Sidebar/Sidebarpages/Sidebarpages';
import { Sidebaraccounts } from './Components/Sidebar/Sidebaraccounts/Sidebaraccounts';
import { Sidebarerrors } from './Components/Sidebar/Sidebarerrors/Sidebarerrors';
import { Sidebarwidgets } from './Components/Sidebar/Sidebarwidgets/Sidebarwidgets';
import { Sidebarapps } from './Components/Sidebar/Sidebarapps/Sidebarapps';
import { Sidebarchat } from './Components/Sidebar/Sidebarchat/Sidebarchat';
import { Sidebaruser } from './Components/Sidebar/Sidebaruser/Sidebaruser';
import { Sidebarchangelog } from './Components/Sidebar/Sidebarchangelog/Sidebarchangelog';
import { Sidebarbutton } from './Components/Sidebar/Sidebarbutton/Sidebarbutton';
import { Maincontentleft } from './Components/MainContent/Maincontent-leftside/Maincontentleft';
import { Maincontentright } from './Components/Maincontentright/Maincontentright';
import { Maincontentcenter } from './Components/Maincontentcenter/Maincontentcenter';
import { Footer } from './Components/Footer/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div className='page-display'>
      <div className='display'>
        <Pagelogo></Pagelogo>
        <Header></Header>
      </div>
      <div className='display'>
        <div className='width20'>
          <Sidebardashboard></Sidebardashboard>
          <Sidebarlayout></Sidebarlayout>
          <Sidebarcrafted></Sidebarcrafted>
          <Sidebarpages></Sidebarpages>
          <Sidebaraccounts></Sidebaraccounts>
          <Sidebarerrors></Sidebarerrors>
          <Sidebarwidgets></Sidebarwidgets>
          <Sidebarapps></Sidebarapps>
          <Sidebarchat></Sidebarchat>
          <Sidebaruser></Sidebaruser>
          <Sidebarchangelog></Sidebarchangelog>
          <Sidebarbutton></Sidebarbutton>
        </div>
        <div className='width25'>
          <Maincontentleft></Maincontentleft>
        </div>
        <div className='width50'>
          <Maincontentright></Maincontentright>
        </div>
      </div>
    </div>
  </>
);

