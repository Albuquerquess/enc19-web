import axios from "axios"

interface BrazilAllCasesRequestProps {
    lastUpdatedAtApify: String;
    recovered: Number;
    infected: Number;
    deceased: Number;
}
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

class coronaSpider {
    // Ceará
    async makeCEConfirmedRequest() {
        const CEConfirmedRequest = await axios.get(`https://indicadores.integrasus.saude.ce.gov.br/api/coronavirus/qtd-confirmados?dataInicio=2020-01-01&dataFim=${new Date().toISOString().slice(0, 10)}&minDate=2020-01-01&maxDate=${new Date().toISOString().slice(0, 10)}&tipo=Confirmados&idMunicipio=&idRegiaoSaude=&idMacrorregiao=&casosHospitalizados=false&casosProfissionais=false&casosIndigenas=false&casosEstudante=false`)
        return CEConfirmedRequest.data[0].quantidade    
    }
    async makeCEDesthsRequest() {
        const CEConfirmedRequest = await axios.get(`https://indicadores.integrasus.saude.ce.gov.br/api/coronavirus/qtd-obitos?dataInicio=2020-01-01&dataFim=${new Date().toISOString().slice(0, 10)}&minDate=2020-01-01&maxDate=${new Date().toISOString().slice(0, 10)}&tipo=Confirmados&idMunicipio=&idRegiaoSaude=&idMacrorregiao=&casosHospitalizados=false&casosProfissionais=false&casosIndigenas=false&casosEstudante=false`)
        return CEConfirmedRequest.data[0].quantidade    
    }
    async makeCERecoveredsRequest() {
        const CEConfirmedRequest = await axios.get(`https://indicadores.integrasus.saude.ce.gov.br/api/coronavirus/qtd-recuperados?dataInicio=2020-01-01&dataFim=${new Date().toISOString().slice(0, 10)}&minDate=2020-01-01&maxDate=${new Date().toISOString().slice(0, 10)}&tipo=Confirmados&idMunicipio=&idRegiaoSaude=&idMacrorregiao=&casosHospitalizados=false&casosProfissionais=false&casosIndigenas=false&casosEstudante=false`)
        return CEConfirmedRequest.data[0].quantidade    
    }
    // Brasil
    async makeBrazilAllCasesRequest() {
        const response = await axios.get('https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true')
        const brazilAllCasesRequest: BrazilAllCasesRequestProps = response.data
        return brazilAllCasesRequest   
    }
    // Mundo
    async makeWorldAllCasesRequest() {
        const response = await axios.get('https://api.covid19api.com/summary')
        const worldAllCasesRequest: WorldAllCasesRequestProps = response.data
        return worldAllCasesRequest
    }
}

export default coronaSpider