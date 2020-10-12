import React from 'react';

import logo from '../../assets/images/Logo.svg';
import { Container, Content } from './styles';

const Landing: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="" />
    </Content>
  </Container>
);

export default Landing;
