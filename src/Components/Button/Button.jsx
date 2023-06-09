import styled from 'styled-components';
import greeIcon from "assets/greeIcon.svg";
import redIcon from "assets/redIcon.svg";

const StyledButton = styled.button`
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
  border: ${props => props.boderColor ? `1px solid ${props.boderColor}` : "none"};
  border-radius: 40px;
  background: ${props => props.bgColor};
  font-weight: ${props => `${props.fontWeight}`};
  line-height: 21px;
  color: #747475;
  color: ${props => props.textColor};
  color: ${props => props.fontSize};
  img {
    margin-right: 8px;
  }
`;
export const Button = ({ width, height, textColor, bgColor, boderColor, percent, fontSize, children, ...rest }) => {
  return <StyledButton
    percent={percent}
    width={width}
    height={height}
    textColor={textColor}
    bgColor={bgColor}
    boderColor={boderColor}
    fontSize={fontSize}
    {...rest}
  >
    {percent && <img src={percent < 0 ? redIcon : greeIcon} alt="arr"></img>}
    {children}
  </StyledButton>;
}
Button.defaultProps = {
  bgColor: '#FFFFFF',
  textColor: '#5429FF',
  width: 128,
  height: 46,
  fontSize: 16,
};
