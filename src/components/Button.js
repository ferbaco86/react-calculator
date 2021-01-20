import PropTypes from 'prop-types';

const Button = props => {
  const { name } = props;
  return (
    <h1>
      {name}
    </h1>
  );
};

Button.propTypes = { name: PropTypes.string.isRequired };

export default Button;
