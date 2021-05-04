import React from 'react';
import Box from '../../components/Box';
import Card from '../../components/Card';
import Container from '../../components/Container';
import fakeImage from '../../assets/Home/fakeImage.png'
import fakeImageMobile from '../../assets/Home/fakeImage@2x.png'
import casosConfirmados from '../../assets/Home/Casos confirmados.svg'
import curados from '../../assets/Home/Curados.svg'
import mortes from '../../assets/Home/Mortes.svg'

import Background from '../../components/Background';
import { LastCase } from './styles';

const Home: React.FC = () => {
  return <Container>
      <Box title="Últimas publicações">
        <Card
          image={[fakeImage, fakeImageMobile]}
          title="Mortes por gênero"
          description="In officia adipisicing Lorem culpa. Magna culpa eiusmod enim do aliqua dolore excepteur ex voluptate duis pariatur voluptate velit sint. Voluptate do aliquip irure labore esse nostrud incididunt incididunt nulla in magna.Aute labore sint nostrud dolore consequat Lorem aliquip nostrud minim. Excepteur elit mollit cupidatat anim magna labore consequat culpa consequat laborum cupidatat. Cillum tempor sint aute cillum. Lorem tempor voluptate consequat exercitation. Nostrud mollit magna incididunt nulla cupidatat do irure ea. Id ea id ullamco et anim Lorem tempor amet nostrud Lorem.Fugiat aliqua ipsum in deserunt labore mollit proident laborum pariatur dolore irure officia ex. Consectetur ut commodo mollit laboris commodo. Est dolor ea ipsum elit proident. Ut veniam ex esse aliqua non ullamco tempor id culpa velit non officia do enim.In officia adipisicing Lorem culpa. Magna culpa eiusmod enim do aliqua dolore excepteur ex voluptate duis pariatur voluptate velit sint. Voluptate do aliquip irure labore esse nostrud incididunt incididunt nulla in magna.Aute labore sint nostrud dolore consequat Lorem aliquip nostrud minim. Excepteur elit mollit cupidatat anim magna labore consequat culpa consequat laborum cupidatat. Cillum tempor sint aute cillum. Lorem tempor voluptate consequat exercitation. Nostrud mollit magna incididunt nulla cupidatat do irure ea. Id ea id ullamco et anim Lorem tempor amet nostrud Lorem.Fugiat aliqua ipsum in deserunt labore mollit proident laborum pariatur dolore irure officia ex. Consectetur ut commodo mollit laboris commodo. Est dolor ea ipsum elit proident. Ut veniam ex esse aliqua non ullamco tempor id culpa velit non officia do enim."
          modal

          />
        <Card
          image={[fakeImage, fakeImageMobile]}
          title="Mortes por gênero"
          description="In officia adipisicing Lorem culpa. Magna culpa eiusmod enim do aliqua dolore excepteur ex voluptate duis pariatur voluptate velit sint. Voluptate do aliquip irure labore esse nostrud incididunt incididunt nulla in magna.Aute labore sint nostrud dolore consequat Lorem aliquip nostrud minim. Excepteur elit mollit cupidatat anim magna labore consequat culpa consequat laborum cupidatat. Cillum tempor sint aute cillum. Lorem tempor voluptate consequat exercitation. Nostrud mollit magna incididunt nulla cupidatat do irure ea. Id ea id ullamco et anim Lorem tempor amet nostrud Lorem.Fugiat aliqua ipsum in deserunt labore mollit proident laborum pariatur dolore irure officia ex. Consectetur ut commodo mollit laboris commodo. Est dolor ea ipsum elit proident. Ut veniam ex esse aliqua non ullamco tempor id culpa velit non officia do enim."
          modal
          />
        <Card
          image={[fakeImage, fakeImageMobile]}
          title="Mortes por gênero"
          description="Fugiat aliqua ipsum in deserunt labore mollit proident laborum pariatur dolore irure officia ex. Consectetur ut commodo mollit laboris commodo. Est dolor ea ipsum elit proident. Ut veniam ex esse aliqua non ullamco tempor id culpa velit non officia do enim."
          modal
          />
      </Box>

      <Box title="Atualizações diárias">
        <Background>
          <LastCase>
            <img src={casosConfirmados} alt="CASOS CONFIRMADOS"/>
            <span className="title">Casos confirmados:</span>
            <span className="value">100.000</span>
          </LastCase>
        </Background>
        <Background>
        <LastCase>
            <img src={curados} alt="CURADOS"/>
            <span className="title">Curados:</span>
            <span className="value">100.000</span>
          </LastCase>
        </Background>
        <Background>
        <LastCase>
            <img src={mortes} alt="MORTES"/>
            <span className="title">Mortos:</span>
            <span className="value">100.000</span>
          </LastCase>
        </Background>
      </Box>

      {/* Fazer o footer */}
  </Container>
}

export default Home;
