import React from 'react';
import Box from '../../components/Box';
import Container from '../../components/Container';
import casosConfirmados from '../../assets/Home/Casos confirmados.svg'
import curados from '../../assets/Home/Curados.svg'
import mortes from '../../assets/Home/Mortes.svg'

import Background from '../../components/Background';
import { LastCase } from './styles';
import api from '../../Services/api';
import Card from '../../components/Card';
import axios from 'axios';

interface dataProps {
  id: number,
  type: string,
  category: string,
  url: string,
  desc: string,
  nameWithHash: string,
  title: string,
}

interface lastCovidDataProps {
  confirmed: {
    quantidade: number,
    label: string
  }
  recovered: {
    quantidade: number,
    label: string
  }
  dead: {
    quantidade: number,
    label: string
  }
}


const Home: React.FC = () => {
  const [graph, setGraph] = React.useState<dataProps>({
    id: 0,
  type: '',
  category: '',
  url: '',
  desc: '',
  nameWithHash: '',
  title: '',
  })
  const [infograph, setInfograph] = React.useState<dataProps>({
    id: 0,
  type: '',
  category: '',
  url: '',
  desc: '',
  nameWithHash: '',
  title: '',
  })
  const [map, setMap] = React.useState<dataProps>({
    id: 0,
  type: '',
  category: '',
  url: '',
  desc: '',
  nameWithHash: '',
  title: '',
  })
  const [allOk, setAllOk] = React.useState(false)
  const [lastCovidData, setLastCovidData] = React.useState<lastCovidDataProps>()

  const getLatestContentOnBackend = async () => {
    const graphResponse = await api.get('/admin/content/show/last', {
      params: {type: 'grafico'}
    })
      setGraph(graphResponse.data[0])
    const mapResponse = await api.get('/admin/content/show/last', {
      params: {type: 'mapa'}
    })
      setMap(mapResponse.data[0])
    const infographResponse = await api.get('/admin/content/show/last', {
      params: {type: 'infografico'}
    })
      setInfograph(infographResponse.data[0])

      setAllOk(true)
  }

  const getLastsCovidDataOnIntegrasus = async () => {
    const confirmedCases = await axios.get('https://indicadores.integrasus.saude.ce.gov.br/api/coronavirus/qtd-confirmados?dataInicio=2020-01-01&dataFim=2021-05-14&minDate=2020-01-01&maxDate=2021-05-14&tipo=Confirmados&idMunicipio=&idRegiaoSaude=&idMacrorregiao=&casosHospitalizados=false&casosProfissionais=false&casosIndigenas=false&casosEstudante=false')
    const recoveredCases = await axios.get('https://indicadores.integrasus.saude.ce.gov.br/api/coronavirus/qtd-recuperados?dataInicio=2020-01-01&dataFim=2021-05-14&minDate=2020-01-01&maxDate=2021-05-14&tipo=Confirmados&idMunicipio=&idRegiaoSaude=&idMacrorregiao=&casosHospitalizados=false&casosProfissionais=false&casosIndigenas=false&casosEstudante=false')
    const deadCases = await axios.get(' https://indicadores.integrasus.saude.ce.gov.br/api/coronavirus/qtd-obitos?dataInicio=2020-01-01&dataFim=2021-05-14&minDate=2020-01-01&maxDate=2021-05-14&tipo=Confirmados&idMunicipio=&idRegiaoSaude=&idMacrorregiao=&casosHospitalizados=false&casosProfissionais=false&casosIndigenas=false&casosEstudante=false')
    
    setLastCovidData({
      confirmed: {
        quantidade: confirmedCases.data[0].quantidade,
        label: 'Casos Confirmados'
      },
      dead: {
        quantidade: deadCases.data[0].quantidade,
        label: 'Óbitos'
      },
      recovered: {
        quantidade: recoveredCases.data[0].quantidade,
        label: 'Casos Confirmados'
      },
      
    })
  }
  
  React.useEffect(() => {
    getLatestContentOnBackend()
    getLastsCovidDataOnIntegrasus()
  }, [])

  return <Container>
      
        {
          allOk && (
            <Box title="Últimas publicações">
              <Card image={[graph.url, graph.url]} title={graph.title} description={graph.desc} modal />
              <Card image={[map.url, map.url]} title={map.title} description={map.desc} modal />
              <Card image={[infograph.url, infograph.url]} title={infograph.title} description={infograph.desc} modal />
            </Box>
          )
        }


      <Box title="Atualizações diárias">
        {
          lastCovidData && <>
            <Background>
          <LastCase>
            <img src={casosConfirmados} alt="CASOS CONFIRMADOS"/>
            <span className="title">Casos confirmados:</span>
            <span className="value">{lastCovidData?.confirmed.quantidade}</span>
          </LastCase>
        </Background>
        <Background>
        <LastCase>
            <img src={curados} alt="CURADOS"/>
            <span className="title">{lastCovidData?.recovered.label}</span>
            <span className="value">{lastCovidData?.recovered.quantidade}</span>
          </LastCase>
        </Background>
        <Background>
        <LastCase>
            <img src={mortes} alt="MORTES"/>
            <span className="title">{lastCovidData?.dead.label}</span>
            <span className="value">{lastCovidData?.dead.quantidade}</span>
          </LastCase>
        </Background>
          </>
        }
      </Box>

  </Container>
}

export default Home;
