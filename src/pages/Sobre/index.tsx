import React from 'react';
import Background from '../../components/Background';
import Box from '../../components/Box';
import Container from '../../components/Container';

import fakeProfilePic from '../../assets/Home/fakeImage.png'

import { Profile } from './styles';

const Sobre: React.FC = () => {
  return <Container>
      <Box title="O que é o ENC19?">
        <Background>
        <span style={{margin: '1rem', fontSize: '2rem'}}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur 
        </span>
        </Background>
      </Box>
      <Box title="Equipe">
        <Background>
          <Profile>
              <nav>
                <img src={fakeProfilePic} alt="Foto de\nperfil" />
                <div className="infos">
                  <h1>Gustavo Albuquerque</h1>
                  <span>Desenvolvedor</span>
                </div>
              </nav>
              <p>Dolore enim incididunt irure dolore aliquip deserunt tempor labore pariatur laboris elit irure. Magna ad veniam in eu ullamco ipsum deserunt fugiat esse commodo ea irure. Irure nisi do fugiat do. Labore aliquis.</p>
          </Profile>
        </Background>
        <Background>
          <Profile>
              <nav>
                <img src={fakeProfilePic} alt="Foto de\nperfil" />
                <div className="infos">
                  <h1>Leandro Lima</h1>
                  <span>Geógrafo</span>
                </div>
              </nav>
              <p>Dolore enim incididunt irure dolore aliquip deserunt tempor labore pariatur laboris elit irure. Magna ad veniam in eu ullamco ipsum deserunt fugiat esse commodo ea irure. Irure nisi do fugiat do. Labore aliquip quis</p>
          </Profile>
        </Background>
        <Background>
          <Profile>
              <nav>
                <img src={fakeProfilePic} alt="Foto de\nperfil" />
                <div className="infos">
                  <h1>John Web</h1>
                  <span>UI/UX Designer</span>
                </div>
              </nav>
              <p>Dolore enim incididunt irure dolore aliquip deserunt tempor labore pariatur laboris elit irure. Magna ad veniam in eu ullamco ipsum deserunt fugiat esse commodo ea irure. Irure nisi do fugiat do. Labore aliquip quis</p>
          </Profile>
        </Background>
  
      </Box>
  </Container>;
}

export default Sobre;