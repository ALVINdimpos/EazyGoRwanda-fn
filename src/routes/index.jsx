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
} from '../pages';

// Public Routes
const publicRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '/unauthorized', element: <UnAuthorizedPage /> },
  { path: '*', element: <NotFoundPage /> },
  { path: '/find-ride', element: <FindRidePage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/forgot-password', element: <ForgotPasswordPage /> },
  { path: '/registration', element: <SignUpPage /> },
  { path: '/trip/choose', element: <ChoosePage /> },
  { path: '/trip/request', element: <RequestTripPage /> },
];

// Protected Routes

export { publicRoutes };
