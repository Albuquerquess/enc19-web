import React from 'react';
import Container from '../../components/Container';
import Notification from '../../components/Notification';
import api from '../../Services/api';
import exploreTypes from '../../utils/content/explorerTypes';
import validateCreateContentForm from '../../utils/createContentSchema';

import { AdminContainer, AdminForm } from './styles';

const Admin: React.FC = () => {
    const [type, setType] = React.useState('')
    const [category, setCategory] = React.useState('graficos')
    const [title, setTitle] = React.useState('')
    const [desc, setDesc] = React.useState('')
    const [date, setDate] = React.useState(new Date().toISOString().split('T')[0])
    const [file, setFile] = React.useState<File | null>()
    const [notificationDisplay, setNotificationDisplay] = React.useState(false)
    const [notificationLabel, setNotificationLabel] = React.useState('')
    // implementar data no back e front

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault()

        const dateRef = new Date(date).toISOString()
        setNotificationLabel('Enviando dados, aguarde...')
        setNotificationDisplay(true)

        const payload = {
            type,
            category,
            title,
            desc,
            date: dateRef
        }

        const isValid = await validateCreateContentForm.isValid(payload)
        if (isValid && file) {
            const data = new FormData()
            data.append('file', file, file.name)

            api.post('/admin/content/create', data, {params: {...payload}}).then(
                response => {
                    if (response.status === 200) {
                        
                        setNotificationLabel('Dados enviados e cadastrados com sucesso!')
                        setTimeout(() => {setNotificationDisplay(false)}, 2000)
                    }
                })
        }else return alert('Preencha os dados corretamente')
            
    }

return <Container>
    <Notification display={notificationDisplay} label={notificationLabel} />
      <AdminContainer>
        <nav>
            <span>Admin</span>
            <span></span>
        </nav>
        
        <AdminForm onSubmit={handleSubmit}>
            <h2>Criar uma publicação</h2>

           <label htmlFor="type" id="label-type">Tipo
            <select
                name="type"
                id="type"
                value={type}
                onChange={({target}) => setType(target.value)}
                required
                >
                <option selected>Escolha um tipo</option>
                <optgroup label="Tipos">
                    <option value="grafico">Gráfico</option>
                    <option value="mapa">Mapa</option>
                    <option value="infografico">Infográfico</option>
                </optgroup>
            </select>
           </label>

           <label htmlFor="category" id="label-category">Categoria
                <select
                    name="categoria"
                    id="adminform-categoria"
                    value={category}
                    onChange={({target}) => setCategory(target.value)}
                    required >
                    
                    {exploreTypes[type] && exploreTypes[type].categories.map((category: String[], index: Number) => {
                        console.log(category[0])
                        return <option value={String(category[2])}>{category[0]}</option>
                    })}
                </select>
            </label>

            <label htmlFor="date" id="label-date">Data
                <input
                  required
                  type="date"
                  name="data"
                  id="data"
                  value={date} onChange={e => setDate(e.target.value)} 
                />
            </label>

            <label htmlFor="title" id="label-title">Titulo
                <input
                    required
                    type="text"
                    value={title}
                    onChange={({target}) => setTitle(target.value)}
                    
                    />
            </label>

            <label htmlFor="descricao" id="label-textarea">Descrição
                <textarea
                    name="descricao"
                    id="descricao"
                    cols={30}
                    rows={10}
                    value={desc}
                    onChange={({target}) => setDesc(target.value)}
                    required
                    />
            </label>

            <label htmlFor="anexo" id="label-anexo">{file ? 'ANEXADO' : 'ANEXO'}
                <input
                    required
                    type="file"
                    name="anexo"
                    id="anexo"
                    onChange={({target}) => {
                        if (target.files && target.files[0]) {
                            setFile(target.files[0])
                        }}
                    }/>
            </label>

            <input required type="submit" value="ENVIAR" />
            
        </AdminForm>
      </AdminContainer>

  </Container>;
}

export default Admin;