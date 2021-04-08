import React from 'react';
import Box from '../../components/Box';
import Card from '../../components/Card';
import Container from '../../components/Container';
import fakeImage from '../../assets/Home/fakeImage.png'
import fakeImageMobile from '../../assets/Home/fakeImage@2x.png'
import Background from '../../components/Background';
// import { Container } from './styles';

const Home: React.FC = () => {
  return <Container>
      <Box title="Últimas publicações" >
        <Card image={[fakeImage, fakeImageMobile]} title="Titulo" description="Fugiat aliqua ipsum in deserunt labore mollit proident laborum pariatur dolore irure officia ex. Consectetur ut commodo mollit laboris commodo. Est dolor ea ipsum elit proident. Ut veniam ex esse aliqua non ullamco tempor id culpa velit non officia do enim."/>
        <Card image={[fakeImage, fakeImageMobile]} title="Titulo" description="Fugiat aliqua ipsum in deserunt labore mollit proident laborum pariatur dolore irure officia ex. Consectetur ut commodo mollit laboris commodo. Est dolor ea ipsum elit proident. Ut veniam ex esse aliqua non ullamco tempor id culpa velit non officia do enim."/>
        <Card image={[fakeImage, fakeImageMobile]} title="Titulo" description="Fugiat aliqua ipsum in deserunt labore mollit proident laborum pariatur dolore irure officia ex. Consectetur ut commodo mollit laboris commodo. Est dolor ea ipsum elit proident. Ut veniam ex esse aliqua non ullamco tempor id culpa velit non officia do enim."/>
        <Card image={[fakeImage, fakeImageMobile]} title="Titulo" description="Fugiat aliqua ipsum in deserunt labore mollit proident laborum pariatur dolore irure officia ex. Consectetur ut commodo mollit laboris commodo. Est dolor ea ipsum elit proident. Ut veniam ex esse aliqua non ullamco tempor id culpa velit non officia do enim."/>
        <Card image={[fakeImage, fakeImageMobile]} title="Titulo" description="Fugiat aliqua ipsum in deserunt labore mollit proident laborum pariatur dolore irure officia ex. Consectetur ut commodo mollit laboris commodo. Est dolor ea ipsum elit proident. Ut veniam ex esse aliqua non ullamco tempor id culpa velit non officia do enim."/>
        <Card image={[fakeImage, fakeImageMobile]} title="Titulo" description="Fugiat aliqua ipsum in deserunt labore mollit proident laborum pariatur dolore irure officia ex. Consectetur ut commodo mollit laboris commodo. Est dolor ea ipsum elit proident. Ut veniam ex esse aliqua non ullamco tempor id culpa velit non officia do enim."/>
      </Box>

      <Box title="Atualizações diárias">
        <Background>
          Eita
        </Background>
      </Box>
  </Container>
}

export default Home;
