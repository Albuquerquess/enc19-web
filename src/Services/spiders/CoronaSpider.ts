// api
import spiderApi from './spiderApi';
//d.ts
import { getAllStatesDataProps } from '../../types/coronaSpideer';
class CoronaSpider {
    async getAllStatesCovidData() {
        const response  = await spiderApi.get('https://api.brasil.io/v1/dataset/covid19/caso/data/?is_last=True&place_type=state')
        const data: getAllStatesDataProps = response.data
        
        const allChartsData = data.results.map(result => {
            return {
                labels: ['Casos confirmados', 'Casos confirmados por 100K habitantes', 'Mortos', 'Média de mortes'],
                datasets: [
                    {
                        label: `Estado do ${result.state}`,
                        data: [result.confirmed, result.confirmed_per_100k_inhabitants, result.deaths, result.death_rate],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                          ],
                          borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                          ],
                          borderWidth: 1,
                        
                    }
                ]
            }
        })
        
        return allChartsData
    }

    async getCearaCovidData() {
        const response  = await spiderApi.get('https://api.brasil.io/v1/dataset/covid19/caso/data/?is_last=True&state=CE')
        const data: getAllStatesDataProps = response.data
        
        const allChartsData = data.results.map(result => {
            return {
                labels: ['Casos confirmados', 'Casos confirmados por 100K habitantes', 'Mortos', 'Média de mortes'],
                datasets: [
                    {
                        label: result.city ? result.city : 'Não informado',
                        data: [result.confirmed, result.confirmed_per_100k_inhabitants, result.deaths, result.death_rate],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                          ],
                          borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                          ],
                          borderWidth: 1,
                        
                    }
                ]
            }
        })
        

        return allChartsData
        
    }

    /**
     * {
     * 
     * data: {
     *  labels: ['26/04/2021', '27/04/2021', '28/04/2021', '29/04/2021' ],
     *  values: [10, 20, 15, 48]
     *  }
     * }
     */
}

export default CoronaSpider