import styled, { css } from 'styled-components';

import Tooltip from './Tooltip/index';

export const Container = styled.div`
  background: #131419;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 1px solid #131419;
  color: #b3b3b3;

  display: flex;
  align-items: center;

  box-shadow: inset 2px 2px 5px rgba(0,0,0,0.5),
                inset -3px -3px 7px rgba(255,255,255,0.05);

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      color: #c53030;
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #b0a2ee;
      border-color: #b0a2ee;
      box-shadow:  1px 1px 1px rgba(0,0,0,0.5),
                -1px -1px 2px rgba(255,255,255,0.05);
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #b0a2ee;
    `}

  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #8c8c8c;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
