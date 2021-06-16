import React from 'react';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Box from '../../components/Box';
import Card from '../../components/Card';

import { ExplorerContainer, ExplorerMain } from './styles';
import { useLocation } from 'react-router';

import { useDebounce } from 'use-lodash-debounce'

// ASSETS
import LupaIcon from '../../assets/Explorer/Lupa.svg'

// UTILS
import explorerTypes from '../../utils/content/explorerTypes'

// API
import api from '../../Services/api';
import Spinner from '../../components/Spinner/spinner';
import Capitalize from '../../utils/Captalize';

interface dataProps {
  id: number,
  type: string,
  category: string,
  url: string,
  desc: string,
  nameWithHash: string,
  title: string,
}

interface getContentOnBackendByCategoryProps {
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
  const [search, setSearch] = React.useState('')
  const [data, setData] = React.useState<dataProps[]>([])
  const [clicked, setClicked] = React.useState<String>('')
  const [title, setTitle] = React.useState<String>('')
  const [type, setType] = React.useState<String>('')
  const [category, setCategory] = React.useState<String>('')
  

  const debounceSearch = useDebounce(search, 1000)

  const getContentOnBackendByCategory = async ({category, type}: getContentOnBackendByCategoryProps) => {
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
  const getSearchContentOnBackend = async (search: string) => {
    api.get('/admin/content/show/search', {
      params: {
        search
      }
    }).then(response => {
      return setData(response.data)
    })
  }
  React.useEffect(() => {
    return setData([])
  }, [currentType])

  React.useEffect(() => {
    getSearchContentOnBackend(debounceSearch)
  }, [debounceSearch])

  React.useEffect(() => {
    setTimeout(() => {
      document.getElementById('FIRST-BUTTON')?.click()
    }, 50)
  }, [dataOfType])
  
  return <Container>
    <ExplorerContainer numberOfCategories={numberOfCategories}>

      <div id="button-container">
        {dataOfType.categories.map((category, index) => {
        return <Button 
          label={ String( category[0] ) }
          goTo="#" 
          handleClick={() => getContentOnBackendByCategory({
            category: category[2],
            type: dataOfType.type[1]
          })}
          
          active={clicked === category[2]}
          key={index}
          id={index === 0 ? 'FIRST-BUTTON' : 'false'}
          />}
         )
        }
        
      </div>

      <ExplorerMain onSearch={onSearch}>
        
        <div id="search-small">
          {onSearch ? 
          (<>
              <input type="text" placeholder="Digite aqui" id="search-input" value={search} 
                onChange={({target}) => setSearch(target.value)}
              />
              <img src={LupaIcon} alt="Clicou" onClick={() => setOnSearch(false)}/></>)
            :
            (<>
              <span>Educacionais</span>
              <img src={LupaIcon} alt="Clique para pesquisar" onClick={() => setOnSearch(true)} /></>)
          }
        </div>

        <div id="search-large">
          <span>{Capitalize(title) || 'Escolha uma categoria a cima'}</span>
          <div id="search-lenguage-input-container">
              <input type="text" placeholder="Digite aqui" id="search-input" value={search} 
                onChange={({target}) => setSearch(target.value)}
              />
              <img src={LupaIcon} alt="Clicou" onClick={() => setOnSearch(false)}/>
          </div>
        </div>

        { data ? <Box>
          {
            (data.map(content => <Card image={[content.url, content.url]} title={content.title} description={content.desc} modal/>)) 
          }
      </Box> : <Spinner />}

      </ExplorerMain>
    </ExplorerContainer>
  </Container>;
}

export default Explorar;