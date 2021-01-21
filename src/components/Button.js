import PropTypes from 'prop-types';

const Button = props => {
  const { name } = props;
  const handleClick = buttonName => {
    props.clickHandler(buttonName);
  };
  return (
    <button type="button" onClick={() => handleClick}>
      {name}
    </button>
  );
};

Button.propTypes = { name: PropTypes.string.isRequired, clickHandler: PropTypes.func.isRequired };

export default Button;
