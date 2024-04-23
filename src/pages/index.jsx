/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import {
  Home,
  NotFound,
  UnAuthorized,
  FindRide,
  ForgotPassword,
  SignUp,
  RequestTrip,
  PostATrip,
  Travel,
  TripDetails,
} from '../containers';
import Choose from '../components/Choose';
import Login from '../containers/Login';

// public routes
const HomePage = () => <Home />;
const NotFoundPage = () => <NotFound />;
const UnAuthorizedPage = () => <UnAuthorized />;
const FindRidePage = () => <FindRide />;
const LoginPage = () => <Login />;
const ForgotPasswordPage = () => <ForgotPassword />;
const SignUpPage = () => <SignUp />;
const ChoosePage = () => <Choose />;
const RequestTripPage = () => <RequestTrip />;
const PostATripPage = () => <PostATrip />;
const TravelPage = () => <Travel />;
const TripDetailsPage = () => <TripDetails />;

// export

export {
  HomePage,
  NotFoundPage,
  UnAuthorizedPage,
  FindRidePage,
  LoginPage,
  ForgotPasswordPage,
  SignUpPage,
  ChoosePage,
  RequestTripPage,
  TravelPage,
  PostATripPage,
  TripDetailsPage,
};
