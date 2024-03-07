/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';

import { Home, NotFound, UnAuthorized, FindRide } from '../containers';

// public routes
const HomePage = () => <Home />;
const NotFoundPage = () => <NotFound />;
const UnAuthorizedPage = () => <UnAuthorized />;
const FindRidePage = () => <FindRide />;

// protected pages

// export
export { HomePage, NotFoundPage, UnAuthorizedPage, FindRidePage };
