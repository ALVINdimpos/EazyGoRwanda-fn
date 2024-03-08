import { HomePage, NotFoundPage, UnAuthorizedPage, FindRidePage, TravelPage } from '../pages';

// Public Routes
const publicRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '/unauthorized', element: <UnAuthorizedPage /> },
  { path: '*', element: <NotFoundPage /> },
  { path: '/find-ride', element: <FindRidePage /> },
  { path: '/travel', element: <TravelPage /> },
];

// Protected Routes

export { publicRoutes };
