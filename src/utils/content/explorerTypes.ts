const exploreTypes: {[index: string]: {type: String[], categories: Array<String[]>}} = {
    grafico: {
        type: ['Gráficos', 'grafico'],
        categories: [
            ['Análises sociais', 'Sociais', 'social'],
            ['Análises econômicas', 'Econômicas', 'economica'],
            ['Análises culturais', 'Culturais', 'cultural'],
            ['Análises educacionais', 'Educacionais', 'educacional']
        ]
    },
    infografico: {
        type: ['Infográficos', 'infografico'],
        categories: [
            ['Análises sociais', 'Sociais', 'social'],
            ['Análises econômicas', 'Econômicas', 'economica'],
            ['Análises culturais', 'Culturais', 'cultural'],
            ['Análises educacionais', 'Educacionais', 'educacional']
        ]
    },
    mapa: {
        type: ['Mapas', 'mapa'],
        categories: [
            ['Socioespacial', 'Socioespacial', 'socioespacial'],
            ['Economia espacial', 'Economia espacial', 'economiaespacial'],
        ]
    },
}

export default exploreTypes