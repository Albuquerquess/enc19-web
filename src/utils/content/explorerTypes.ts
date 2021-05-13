const exploreTypes: {[index: string]: {type: String[], categories: Array<String[]>}} = {
    graficos: {
        type: ['Gráficos', 'grafico'],
        categories: [
            ['Análises sociais', 'Sociais', 'social'],
            ['Análises econômicas', 'Econômicas', 'economica'],
            ['Análises culturais', 'Culturais', 'cultural'],
            ['Análises educacionais', 'Educacionais', 'educacional']
        ]
    },
    infograficos: {
        type: ['Infográficos', 'infografico'],
        categories: [
            ['Análises sociais', 'Sociais', 'social'],
            ['Análises econômicas', 'Econômicas', 'economica'],
            ['Análises culturais', 'Culturais', 'cultural'],
            ['Análises educacionais', 'Educacionais', 'educacional']
        ]
    },
    mapas: {
        type: ['Mapas', 'mapa'],
        categories: [
            ['Socioespacial', 'Socioespacial', 'socioespacial'],
            ['Economia espacial', 'Economia espacial', 'economiaespacial'],
        ]
    },
}

export default exploreTypes