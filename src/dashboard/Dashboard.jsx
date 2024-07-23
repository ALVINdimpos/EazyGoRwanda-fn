import React, { useState } from 'react';
import { FaCar, FaUsers, FaDollarSign, FaStar, FaCarAlt, FaRoute, FaChartLine, FaUserCheck } from 'react-icons/fa';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import AdminNavbar from './AdminNavbar';
import AdminSidebar from './AdminSidebar';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Footer from './Footer';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Rides',
        data: [65, 59, 80, 81, 56, 55, 70],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
      {
        label: 'Revenue',
        data: [45, 70, 65, 75, 60, 80, 90],
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1,
      },
    ],
  };

  const barChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Revenue',
        data: [12000, 19000, 15000, 17000, 22000, 25000, 20000],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
    ],
  };

  const doughnutChartData = {
    labels: ['Completed', 'Cancelled', 'In Progress'],
    datasets: [
      {
        data: [70, 15, 15],
        backgroundColor: ['rgba(75, 192, 192, 0.5)', 'rgba(255, 99, 132, 0.5)', 'rgba(255, 205, 86, 0.5)'],
      },
    ],
  };

  const StatCard = ({ icon: Icon, title, value, color }) => (
    <div className={`bg-white rounded-lg shadow-md p-4 border-l-4 ${color}`}>
      <div className='flex items-center justify-between'>
        <div>
          <p className='text-sm font-medium text-gray-600'>{title}</p>
          <p className='text-2xl font-semibold text-gray-900'>{value}</p>
        </div>
        <Icon className={`text-3xl ${color.replace('border-', 'text-')}`} />
      </div>
    </div>
  );

  return (
    <div className='flex h-screen bg-gray-100'>
      <AdminSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className='flex-1 flex flex-col overflow-hidden'>
        <AdminNavbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className='flex-1 overflow-x-hidden overflow-y-auto bg-green-50 p-4'>
          <div className='max-w-7xl mx-auto'>
            <h1 className='text-2xl font-semibold mb-4 text-gray-800'>Dashboard</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4'>
              <StatCard icon={FaCar} title='Total Rides' value='1,234' color='border-green-800' />
              <StatCard icon={FaUsers} title='Active Users' value='5,678' color='border-green-500' />
              <StatCard icon={FaDollarSign} title='Revenue' value='$12,345' color='border-yellow-500' />
              <StatCard icon={FaStar} title='Avg. Rating' value='4.8' color='border-purple-500' />
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
              <div className='bg-white rounded-lg shadow-md p-4'>
                <h2 className='text-lg font-semibold mb-2 text-gray-800'>Rides & Revenue Trend</h2>
                <div style={{ height: '300px' }}>
                  <Line data={lineChartData} options={chartOptions} />
                </div>
              </div>
              <div className='bg-white rounded-lg shadow-md p-4'>
                <h2 className='text-lg font-semibold mb-2 text-gray-800'>Weekly Revenue</h2>
                <div style={{ height: '300px' }}>
                  <Bar data={barChartData} options={chartOptions} />
                </div>
              </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4'>
              <div className='bg-white rounded-lg shadow-md p-4'>
                <h2 className='text-lg font-semibold mb-2 text-gray-800'>Ride Status</h2>
                <div style={{ height: '250px' }}>
                  <Doughnut data={doughnutChartData} options={chartOptions} />
                </div>
              </div>
              <div className='lg:col-span-2 bg-white rounded-lg shadow-md p-4'>
                <h2 className='text-lg font-semibold mb-2 text-gray-800'>Recent Activities</h2>
                <ul className='space-y-3'>
                  {[
                    { icon: FaCarAlt, text: 'New ride requested from John Doe', time: '5 minutes ago' },
                    { icon: FaRoute, text: 'Sarah completed a 15-mile trip', time: '20 minutes ago' },
                    { icon: FaChartLine, text: 'Weekly revenue increased by 12%', time: '1 hour ago' },
                    { icon: FaUserCheck, text: 'New driver Mike Johnson approved', time: '2 hours ago' },
                  ].map((activity, index) => (
                    <li key={index} className='flex items-center space-x-3 text-sm'>
                      <activity.icon className='text-xl text-green-700 flex-shrink-0' />
                      <div>
                        <p className='text-gray-800'>{activity.text}</p>
                        <p className='text-xs text-gray-500'>{activity.time}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg shadow-md p-4 text-white'>
              <h2 className='text-lg font-semibold mb-2'>Quick Insights</h2>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className='bg-white bg-opacity-20 rounded p-3'>
                  <h3 className='font-semibold mb-1 text-sm'>Most Popular Route</h3>
                  <p className='text-sm'>Downtown to Airport</p>
                </div>
                <div className='bg-white bg-opacity-20 rounded p-3'>
                  <h3 className='font-semibold mb-1 text-sm'>Peak Hours</h3>
                  <p className='text-sm'>8 AM - 10 AM, 4 PM - 7 PM</p>
                </div>
                <div className='bg-white bg-opacity-20 rounded p-3'>
                  <h3 className='font-semibold mb-1 text-sm'>Top Driver</h3>
                  <p className='text-sm'>Alex Johnson (4.9 ★)</p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
