
import HowItWorks from '../components/HowItWorksSection/HowItWorks';

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
} from '../pages';


// Public Routes
const publicRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '/how-it-works', element: <HowItWorks /> },
  { path: '/unauthorized', element: <UnAuthorizedPage /> },
  { path: '*', element: <NotFoundPage /> },
  { path: '/find-ride', element: <FindRidePage /> },

  { path: '/travel', element: <TravelPage /> },

  { path: '/login', element: <LoginPage /> },
  { path: '/forgot-password', element: <ForgotPasswordPage /> },
  { path: '/registration', element: <SignUpPage /> },
  { path: '/trip/choose', element: <ChoosePage /> },
  { path: '/trip/request', element: <RequestTripPage /> },
  { path: '/trip/post', element: <PostATripPage /> },
  { path: '/travel', element: <TravelPage /> },
  { path: '/trip/:id', element: <TripDetailsPage /> },
];

// Protected Routes

export { publicRoutes };
