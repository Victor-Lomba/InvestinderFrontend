import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
    margin:15px 0;
    width: 70px;
    height: 70px;
    font-size: 16px;
    background: ${shade(0.2, '#b0a2ee')};
    border-radius: 50%;
    border:none;
    outline:none;
    -webkit-font-smoothing: antialiased;
    color: #f4ede8;
    font-weight: 600;

    transition: background-color 0.2s;

    svg {
      margin-top: 10px;
      transition: color 0.2s;
    }

  &:hover {
    background-color: ${shade(0.4, '#b0a2ee')};
    color: ${shade(0.2, '#f4ede8')};
  }
`;
