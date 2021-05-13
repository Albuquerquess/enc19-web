import React from 'react';
import Button from '../../components/Button';
import Container from '../../components/Container';

import { ExplorerContainer, ExplorerMain } from './styles';
import Box from '../../components/Box';
import Card from '../../components/Card';
import { useLocation } from 'react-router';

// ASSETS
import LupaIcon from '../../assets/Explorer/Lupa.svg'

// UTILS
import explorerTypes from '../../utils/content/explorerTypes'

// API
import api from '../../Services/api';

interface dataProps {
  id: number,
  type: string,
  category: string,
  url: string,
  desc: string,
  nameWithHash: string,
  title: string,
}

interface getContentOnBackendProps {
  category: String,
  type: String
}

const Explorar: React.FC = () => {
  
  const pathname = useLocation().pathname.split('/')
  const currentType = pathname[pathname.length - 1]
  const dataOfType = explorerTypes[currentType]
  const numberOfCategories = dataOfType.categories.length
    
  const [page, setPage] = React.useState(1)
  const [onSearch, setOnSearch] = React.useState(false)
  const [data, setData] = React.useState<dataProps[]>([])
  const [clicked, setClicked] = React.useState<String>('')
  const [title, setTitle] = React.useState<String>('')


  const getContentOnBackend = async ({category, type}: getContentOnBackendProps) => {
    setClicked(category)
    setTitle(category)

    api.get('/admin/content/index', {
    params: {
      page,
      category,
      type
    },
  }).then(response => {
    return setData(response.data)
  })  
    
}
  React.useEffect(() => {
    return setData([])
  }, [currentType])
  
  return <Container>
    {/* Resolver questão do onClick no component Button (adicionar tipo do onClick) */}
    <ExplorerContainer numberOfCategories={numberOfCategories}>

      <div id="button-container">
        {dataOfType.categories.map((category, index) => {
        return <Button 
          label={ String( category[0] ) }
          goTo="#" 
          handleClick={() => getContentOnBackend({category: category[2], type: dataOfType.type[1]})}
          active={clicked === category[2]}
          />}
         )
        }
        
      </div>

      <ExplorerMain onSearch={onSearch}>
        
        <div id="search-small">
          {onSearch ? 
          (<>
              <input type="text" placeholder="Digite aqui" id="search-input"/>
              <img src={LupaIcon} alt="Clicou" onClick={() => setOnSearch(false)}/></>)
            :
            (<>
              <span>Educacionais</span>
              <img src={LupaIcon} alt="Clique para pesquisar" onClick={() => setOnSearch(true)} /></>)
          }
        </div>

        <div id="search-large">
          <span>{title || 'Escolha uma categoria a cima'}</span>
          <div id="search-lenguage-input-container">
              <input type="text" placeholder="Digite aqui" id="search-input"/>
              <img src={LupaIcon} alt="Clicou" onClick={() => setOnSearch(false)}/>
          </div>
        </div>

        <Box>
          {
            data && (data.map(content => <Card image={[content.url, content.url]} title={content.title} description={content.desc} modal/>))  
          }
      </Box>

      </ExplorerMain>
    </ExplorerContainer>
  </Container>;
}

export default Explorar;