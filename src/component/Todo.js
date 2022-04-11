import Button from '@atlaskit/button';
import React from 'react';
import styled from "styled-components";
import Checkicon from '@atlaskit/icon/glyph/check';
import { css } from 'styled-components';

const ButtonStyled = styled(Button)`
    margin-top: 5px;
    text-align: left;

    &, &:hover {
      ${p => p.isCompleted && css`
        text-decoration: line-through;
      `}
    }
    
    
    &:hover {
      .check-icon {
        display:inline-block;
      }
    }

    .check-icon {
      display: none;
    
    &:hover {
      background-color: #f5f5f5;
      border-radius: 3px;
      }
    }
`;


export default function Todo({ todo, onCheckBtnClick}) {
  return <ButtonStyled 
  isCompleted={todo.isCompleted}
  shouldFitContainer 
  iconAfter={!todo.isCOmpleted && (
  <span className="check-icon" onClick={() => onCheckBtnClick(todo.id)}>
    <Checkicon primaryColor="#008000"  />
  
  </span>
    )
  }>
    {todo.name}</ButtonStyled>;
}
