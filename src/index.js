import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Pagelogo } from './Components/Pagelogo/Pagelogo';
import { Header } from './Components/Header/Header';
import { Sidebardashboard } from './Components/Sidebar/Siderbardashboard/Sidebardashboard';
import { Sidebarcrafted } from './Components/Sidebar/Sidebarcrafted/Sidebarcrafted';
import { Sidebarpages } from './Components/Sidebar/Sidebarpages/Sidebarpages';
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
        <div className='width20'>
          <Pagelogo></Pagelogo>
        </div>
        <div className='width80'>
          <Header></Header>
        </div>
      </div>
      <div className='display'>
        <div className='width20 bg-col'>
          <Sidebardashboard name="Dashboard"></Sidebardashboard>
          <Sidebardashboard name="Layout Builder"></Sidebardashboard>
          <Sidebarcrafted name="C R A F T E D"></Sidebarcrafted>
          <Sidebarpages name="Pages"></Sidebarpages>
          <Sidebarpages name="Accounts"></Sidebarpages>
          <Sidebarpages name="Errors"></Sidebarpages>
          <Sidebarpages name="Widgets"></Sidebarpages>
          <Sidebarcrafted name="A P P S"></Sidebarcrafted>
          <Sidebarpages name="Chat"></Sidebarpages>
          <Sidebardashboard name="User management"></Sidebardashboard>
          <Sidebardashboard name="Changelog v8.1.5"></Sidebardashboard>
          <Sidebarbutton></Sidebarbutton>
        </div>
        <div className='width80'>
          <div>
            <Maincontentcenter></Maincontentcenter>
          </div>
          <div className='display-child'>
            <div className='width-child-div30'>
              <Maincontentleft></Maincontentleft>
            </div>
            <div className='width-child-div65'>
              <Maincontentright></Maincontentright>
            </div>
          </div>
          <div>
            <Footer></Footer>
          </div>
        </div>
      </div>
    </div>
  </>
);

