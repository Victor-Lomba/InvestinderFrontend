import React from 'react';

import { Container } from './styles';

const RButton = ({ children, icon: Icon, ...rest }) => (
  <Container type="button" {...rest}>
    {children}

    {Icon && <Icon size={50} />}
  </Container>
);

export default RButton;
