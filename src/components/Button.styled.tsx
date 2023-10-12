import styled, {css} from "styled-components";
import {myTheme} from "../styles/Theme.styled";

type ButtonPropsType = {
    color: 'primary' | 'secondary'
}
export const Button = styled.button<ButtonPropsType>`
  width: 86px;
  height: 30px;
  border-radius: 5px;
  font-size: 10px;
  font-weight: ${myTheme.font.fontweight};
  font-family: ${myTheme.font.fontfamily};
  margin-left: 20px;

  & + & {
    margin-left: 30px;
  }
 

  ${props => props.color === 'primary' && css<ButtonPropsType>`
    border: none;
    background-color: #4E71FE;
    color: snow;
  `}

  ${props => props.color === 'secondary' && css<ButtonPropsType>`
    border: 2px solid #4E71FE;
    background-color: snow;
    color: #4E71FE;
  `}
`