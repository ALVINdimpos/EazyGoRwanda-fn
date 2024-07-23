import HowItWorks from '../components/HowItWorksSection/HowItWorks';
import CancellingTrip from '../components/CancellingTrip';
import CostEstimate from '../components/CostEstimate';
import AboutUs from '../components/AboutUs';
import Trips from '../components/Trips';
import Contact from '../components/Contact';
import { element } from 'prop-types';
import PNavbar from '../pages/Passenger/Navbar';
import PassengerProfile from '../pages/Passenger/Profile';
import Notification from '../pages/Passenger/Notification';
import DriverProfile from '../dashboard/DriverProfile';
import {
  HomePage,
  NotFoundPage,
  UnAuthorizedPage,
  FindRidePage,
  LoginPage,
  ForgotPasswordPage,
  SignUpPage,
  ChoosePage,
  RequestTripPage,
  PostATripPage,
  TravelPage,
  TripDetailsPage,
  DriversPage,
  PassengersPage,
  TrustSafetyPage,
  PostTripRulesPage,
} from '../pages';
import AdminNavbar from '../dashboard/AdminNavbar';
import AdminSidebar from '../dashboard/AdminSidebar';
import Dashboard from '../dashboard/Dashboard';
import TripManagement from '../dashboard/TripManagement';
import Driver from '../dashboard/Driver';
import AdminNotification from '../dashboard/AdminNotifications';
import Analytics from '../dashboard/Analytics';
import Messaging from '../dashboard/Messaging';
import Settings from '../dashboard/Settings';
import Passenger from '../dashboard/Passenger';
import CancelTrip from '../dashboard/CancelTrip';
import RideManagement from '../dashboard/RideManagement';
import ReviewRanking from '../dashboard/ReviewRanking';
import RecentTrips from '../dashboard/RecentTrips';
import MyTrips from '../pages/Driver/MyTrips';
import Chat from '../pages/Driver/Chat';
import Rides from '../pages/Passenger/MyRides';
import Dnavbar from '../pages/Driver/Navbar';

// Public Routes
const publicRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '/how-it-works', element: <HowItWorks /> },
  { path: '/unauthorized', element: <UnAuthorizedPage /> },
  { path: '*', element: <NotFoundPage /> },
  { path: '/find-ride', element: <FindRidePage /> },
  { path: '/travel', element: <TravelPage /> }, // Search results
  { path: '/login', element: <LoginPage /> },
  { path: '/forgot-password', element: <ForgotPasswordPage /> },
  { path: '/registration', element: <SignUpPage /> },
  { path: '/trip/choose', element: <ChoosePage /> }, // post rides en trips
  { path: '/trip/request', element: <RequestTripPage /> },
  { path: '/trip/post', element: <PostATripPage /> },
  { path: '/trip/:id', element: <TripDetailsPage /> },
  { path: '/drivers', element: <DriversPage /> },
  { path: '/passengers', element: <PassengersPage /> },
  { path: '/trust-safety', element: <TrustSafetyPage /> },
  { path: '/post-trip-rules', element: <PostTripRulesPage /> },
  { path: '/Cancel-a-trip', element: <CancellingTrip /> },
  { path: '/Cost-estimate', element: <CostEstimate /> },
  { path: '/About-us', element: <AboutUs /> },
  { path: '/Contact-us', element: <Contact /> },
  { path: '/Passenger/Home', element: <PNavbar /> },
  { path: '/Passenger/Profile', element: <PassengerProfile /> },
  { path: '/Passenger/Notification', element: <Notification /> },
  { path: '/Trips', element: <Trips /> }, // list of ll trips accessed by passsenger
  { path: '/Driver/profile', element: <DriverProfile /> },
  { path: '/Driver/Navbar', element: <Dnavbar /> },
  { path: '/Driver/My-trips', element: <MyTrips /> },
  { path: '/Driver/Chat', element: <Chat /> },
  { path: '/Dashboard/Navbar', element: <AdminNavbar /> },
  { path: '/Dashboard/Sidebar', element: <AdminSidebar /> },
  { path: '/Dashboard/', element: <Dashboard /> },
  { path: '/Dashboard/Trip', element: <TripManagement /> },
  { path: '/Dashboard/Driver', element: <Driver /> },
  { path: '/Dashboard/Notification', element: <AdminNotification /> },
  { path: '/Dashboard/Analytics', element: <Analytics /> },
  { path: '/Dashboard/Message', element: <Messaging /> },
  { path: '/Dashboard/Settings', element: <Settings /> },
  { path: '/Dashboard/Passenger', element: <Passenger /> },
  { path: '/Dashboard/Rides', element: <RideManagement /> },
  { path: '/Dashboard/Cancel-trip', element: <CancelTrip /> },
  { path: '/Dashboard/Review', element: <ReviewRanking /> },
  { path: '/Dashboard/Recent-trips', element: <RecentTrips /> },
  { path: '/Passenger/My-rides', element: <Rides /> },
  { path: '/Dashboard/Passenger-profile', element: <PassengerProfile /> },
  { path: '/Dashboard/Driver-profile', element: <DriverProfile /> },
];

// Protected Routes

export { publicRoutes };
