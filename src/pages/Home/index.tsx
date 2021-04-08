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
        <Background>
          Ex eiusmod magna velit in duis fugiat. Quis id pariatur ipsum reprehenderit consectetur quis occaecat. In culpa nisi veniam id fugiat in commodo nisi mollit sunt. Est excepteur id id nisi est excepteur et. Laboris magna fugiat est Lorem nulla cupidatat deserunt nisi labore. Consectetur in sit proident laboris officia esse magna irure duis. Voluptate ad consequat occaecat nostrud proident fugiat deserunt occaecat.
        </Background>
      </Box>
  </Container>
}

export default Home;
