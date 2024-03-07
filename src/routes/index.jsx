import { HomePage, NotFoundPage, UnAuthorizedPage, FindRidePage } from '../pages';

// Public Routes
const publicRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '/unauthorized', element: <UnAuthorizedPage /> },
  { path: '*', element: <NotFoundPage /> },
  { path: '/find-ride', element: <FindRidePage /> },
];

// Protected Routes

export { publicRoutes };
