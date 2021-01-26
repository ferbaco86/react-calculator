import PropTypes from 'prop-types';
import styled from 'styled-components';

const ResultContainer = styled.div`
display: flex;
background-color: gray;
font-family: monospace;
height: 100px;
padding: 0 20px;
justify-content: end;
align-items: center;`;

const ResultTitle = styled.h1`
color: white;
font-weight: bold;
font-size: 50px`;

const Display = props => {
  const { result } = props;
  return (
    <ResultContainer>
      <ResultTitle>
        {result}
      </ResultTitle>
    </ResultContainer>
  );
};

Display.defaultProps = {
  result: '0',
};

Display.propTypes = { result: PropTypes.string };

export default Display;
