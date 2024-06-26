import { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DashboardAvatars from '../partials/dashboard/DashboardAvatars';
import FilterButton from '../components/DropdownFilter';
import Datepicker from '../components/Datepicker';
import DashboardCard01 from '../partials/dashboard/DashboardCard01';
import DashboardCard02 from '../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../partials/dashboard/DashboardCard03';

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='flex h-screen overflow-hidden'>
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className='relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto'>
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className='w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl'>
            {/* Welcome banner */}
            <WelcomeBanner />

            {/* Dashboard actions */}
            <div className='mb-8 sm:flex sm:justify-between sm:items-center'>
              {/* Left: Avatars */}
              <DashboardAvatars />

              {/* Right: Actions */}
              <div className='grid justify-start grid-flow-col gap-2 sm:auto-cols-max sm:justify-end'>
                {/* Filter button */}
                <FilterButton />
                {/* Datepicker built with flatpickr */}
                <Datepicker />
                {/* Add view button */}
                <button className='text-white bg-indigo-500 btn hover:bg-indigo-600'>
                  <svg className='w-4 h-4 opacity-50 fill-current shrink-0' viewBox='0 0 16 16'>
                    <path d='M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z' />
                  </svg>
                  <span className='hidden ml-2 xs:block'>Add view</span>
                </button>
              </div>
            </div>

            {/* Cards */}
            <div className='grid grid-cols-12 gap-6'>
              {/* Line chart (Acme Plus) */}
              <DashboardCard01 />
              {/* Line chart (Acme Advanced) */}
              <DashboardCard02 />
              {/* Line chart (Acme Professional) */}
              <DashboardCard03 />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
