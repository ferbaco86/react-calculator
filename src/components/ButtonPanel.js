import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';

const RowContainer = styled.div`
display:flex;
height:100px;`;

const ButtonPanel = props => {
  const handleClick = buttonName => {
    props.clickHandler(buttonName);
  };

  return (
    <>
      <RowContainer>
        <Button name="AC" clickHandler={handleClick} />
        <Button name="+/-" clickHandler={handleClick} />
        <Button name="%" clickHandler={handleClick} />
        <Button color="orange" name="÷" clickHandler={handleClick} />
      </RowContainer>
      <RowContainer>
        <Button name="7" clickHandler={handleClick} />
        <Button name="8" clickHandler={handleClick} />
        <Button name="9" clickHandler={handleClick} />
        <Button color="orange" name="x" clickHandler={handleClick} />
      </RowContainer>
      <RowContainer>
        <Button name="4" clickHandler={handleClick} />
        <Button name="5" clickHandler={handleClick} />
        <Button name="6" clickHandler={handleClick} />
        <Button color="orange" name="-" clickHandler={handleClick} />
      </RowContainer>
      <RowContainer>
        <Button name="1" clickHandler={handleClick} />
        <Button name="2" clickHandler={handleClick} />
        <Button name="3" clickHandler={handleClick} />
        <Button color="orange" name="+" clickHandler={handleClick} />
      </RowContainer>
      <RowContainer>
        <Button wide name="0" clickHandler={handleClick} />
        <Button name="." clickHandler={handleClick} />
        <Button color="orange" name="=" clickHandler={handleClick} />
      </RowContainer>
    </>
  );
};

ButtonPanel.propTypes = { clickHandler: PropTypes.func.isRequired };
export default ButtonPanel;
