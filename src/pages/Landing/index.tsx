import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/Logo.svg';
import { Container, Content } from './styles';

const Landing: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="Happy" />

      <main>
        <h1>Leve felicidade para o mundo</h1>
        <p>Visite orfanatos e mude o dia de muitas crianças.</p>
      </main>

      <div className="location">
        <strong>Rio do Sul</strong>
        <span>Santa Catarina</span>
      </div>

      <Link to="/app" className="enter-app">
        <FiArrowRight size={24} color="rgba(0,0,0, 0.6)" />
      </Link>
    </Content>
  </Container>
);

export default Landing;
