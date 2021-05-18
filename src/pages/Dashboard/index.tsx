import React, { useEffect, useState } from 'react';
import Box from '../../components/Box';
import Button from '../../components/Button';
import Container from '../../components/Container';

import { DashboardContainer } from './styles';

// Charts
import { LineChart, ResponsiveContainer } from 'recharts';


// Spyder
import coronaSpider from '../../Services/spiders/CoronaSpider'

const CoronaSpider = new coronaSpider()

interface WorldAllCasesRequestProps {
  Global: {
      NewConfirmed: Number;
      TotalConfirmed: Number;
      NewDeaths: Number;
      TotalDeaths: Number;
      NewRecovered: Number;
      TotalRecovered: Number;
  }
  Countries: { 
      Country: String;
      CountryCode: String;
      Date: String;
      TotalConfirmed: Number;
      TotalDesths: Number;
      TotalRecovered: Number
  }
}

const Dashboard: React.FC = () => {
  const [worldAllCasesRequest, setWorldAllCasesRequest] = React.useState<WorldAllCasesRequestProps>()
  
  CoronaSpider.makeWorldAllCasesRequest().then(response => {
    
    setWorldAllCasesRequest(response)
    console.log(typeof worldAllCasesRequest)
  })

  // CoronaSpider.makeCEConfirmedRequest().then(response => console.log('CE Confirmados - ',response))
  // CoronaSpider.makeCEDesthsRequest().then(response => console.log('CE Mortos - ',response))
  // CoronaSpider.makeCERecoveredsRequest().then(response => console.log('CE Recuperados - ',response))
  // CoronaSpider.makeBrazilAllCasesRequest().then(response => console.log('BRASIL - ', response.deceased))
  // CoronaSpider.makeWorldAllCasesRequest().then(response => console.log('Mundo - ', response.Countries.Country))

  


  return <Container>
    <DashboardContainer>
      
      <div id="button-container">
        <Button label="Mundo" goTo="" />
        <Button label="Brasil" goTo="" />
        <Button label="Ceará" goTo="" />
      </div>

      <Box title="Mundo" subtitle="Casos Confirmados">
        {/* <ResponsiveContainer>
          <LineChart data={worldAllCasesRequest}>

        </LineChart>
        </ResponsiveContainer> */}
      </Box>
      <Box subtitle="Óbitos Confirmados">

      </Box>
    </DashboardContainer>
  </Container>
}

export default Dashboard;