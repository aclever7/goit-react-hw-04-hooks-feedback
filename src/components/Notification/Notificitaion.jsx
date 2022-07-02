import PropTypes from 'prop-types';
import { NotificationMessage } from './Notification.styled';

function Notification({ message }) {
  return <NotificationMessage>{message}</NotificationMessage>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
