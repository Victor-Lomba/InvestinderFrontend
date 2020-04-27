import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
    margin:15px 0;
    width:100%;
    height:50px;
    font-size: 18px;
    background: #131419;
    border-radius: 10px;
    border:none;
    outline:none;
    color:#8c8c8c;
    font-weight: 600;
    box-shadow:  2px 2px 5px rgba(0,0,0,0.5),
                -3px -3px 7px rgba(255,255,255,0.05);

  &:hover {
    background: ${shade(0.2, '#131419')};
  }
`;
