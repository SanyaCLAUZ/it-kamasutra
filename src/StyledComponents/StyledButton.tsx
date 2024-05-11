import styled, { css } from "styled-components";

type StyledButtonPropsType = {
  primary?: boolean;
};

export const StyledButton = styled.button<StyledButtonPropsType>`
  font-weight: bold;
  font-family: "inter", Courier, monospace;
  width: 86px;
  height: 30px;
  font-size: 10px;
  margin-right: 20px;
  border-radius: 5px;
  border-color: #4e71fe;
  text-align: center;

  // Primary
${props => props.primary && css<StyledButtonPropsType>`
    background-color: #4e71fe;
    color: white;
  `}
`

export default StyledButton;