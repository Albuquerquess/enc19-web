type city = {
    city: string | null
    city_ibge_code: string
    confirmed: number
    confirmed_per_100k_inhabitants: number
    date: string
    death_rate: number
    deaths: number
    estimated_population: number
    estimated_population_2019: number
    is_last: boolean
    order_for_place: number
    place_type: string
    state: string

}
export interface getCityDataByStateProps {
    count: number;
    results: city[]
}

type state = {
    city_ibge_code: string
    confirmed: number
    confirmed_per_100k_inhabitants: number
    date: string
    death_rate: number
    deaths: number
    estimated_population: number
    estimated_population_2019: number
    is_last: boolean
    state: string
    city: string
}

export interface getAllStatesDataProps {
   count: number;
   results: state[]

}

type dataSet  = {
    label:  string
    data: number[]
    backgroundColor: string[]
    borderColor: string[]
    borderWidth: number
}
export interface getAllStatesDataReturn {
    labels: string[]
    datasets: dataSet[]

}
