/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';

import { Home, NotFound, UnAuthorized } from '../containers';

// public routes
const HomePage = () => <Home />;
const NotFoundPage = () => <NotFound />;
const UnAuthorizedPage = () => <UnAuthorized />;

// protected pages

// export
export { HomePage, NotFoundPage, UnAuthorizedPage };
