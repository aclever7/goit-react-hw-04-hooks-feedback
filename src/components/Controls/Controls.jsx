import PropTypes from 'prop-types';
import { ControlButton } from './Controls.styled';

function Controls({ options, onLeaveFeedback }) {
  return (
    <ul>
      {options.map(option => {
        return (
          <ControlButton
            type="button"
            key={option}
            name={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option.toUpperCase()}
          </ControlButton>
        );
      })}
    </ul>
  );
}

Controls.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Controls;
