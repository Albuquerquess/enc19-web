import React from 'react';
import { useLocation } from 'react-router';
// components
import Container from '../../components/Container';
import Button from '../../components/Button';
// services
import CoronaSpider from '../../Services/spiders/CoronaSpider';
// chartjs
import { Bar } from 'react-chartjs-2'
// types
import { getAllStatesDataReturn } from '../../types/coronaSpideer'
// styles
import { DashboardContainer } from './styles'

const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
  },
}

const Dashboard: React.FC = () => {
  
  const [data, setData] = React.useState<getAllStatesDataReturn[]>([])
  const [currentChartType, setCurrentChartType] = React.useState('ceara')
  
  const coronaSpider = new CoronaSpider();
  
  const coronaSpiderMethods: {[index: string]:any} = {
    'mundo': coronaSpider.getAllStatesCovidData(),
    'brasil': coronaSpider.getAllStatesCovidData(),
    'ceara': coronaSpider.getCearaCovidData()
  }
  
  async function getChart(type: string) {
    setData([])
    const data = await coronaSpiderMethods[type]
    setData(data)
  }

  React.useEffect(() => {
    getChart(currentChartType)
  }, [currentChartType])

  return <Container>
    <DashboardContainer>
      <div id="button-container">
        <Button label='Mundo' active={currentChartType === 'mundo'}  handleClick={() => setCurrentChartType('mundo')}/>
        <Button label='Brasil' active={currentChartType === 'brasil'}  handleClick={() => setCurrentChartType('brasil')}/>
        <Button label='Ceará' active={currentChartType === 'ceara'}  handleClick={() => setCurrentChartType('ceara')}/>
      </div>
      {data ? data.map(chart => <section className="chart-wrapepr">
        <Bar data={chart} options={options}/>
        </section>) : ''}
    </DashboardContainer>
  </Container>;
}

export default Dashboard;