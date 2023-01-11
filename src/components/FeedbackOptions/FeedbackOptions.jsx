import React from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ buttons, onLeaveFeedback }) => {
  return (
    <div className={css.title}>
      <ul className={css.buttonsList}>
        {buttons.map(button => (
          <li key={button}>
            <button
              className={css.button}
              type="button"
              name={button}
              onClick={onLeaveFeedback}
            >
              {button}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

FeedbackOptions.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
