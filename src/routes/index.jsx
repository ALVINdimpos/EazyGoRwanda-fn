import { HomePage, NotFoundPage, UnAuthorizedPage } from '../pages';

// Public Routes
const publicRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '/unauthorized', element: <UnAuthorizedPage /> },
  { path: '*', element: <NotFoundPage /> },
];

// Protected Routes

export { publicRoutes };
