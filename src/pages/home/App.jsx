import './style.css'

import { useState } from 'react'

import ButtonSearch from '../../components/ButtonSearch'
import Header from '../../components/Header'
import Input from '../../components/Input'
import ItemList from '../../components/ItemList'

import { getDataRepo } from '../../services/api'

const uniqueList = new Set()

function App() {

  const [repository, setRepository] = useState("")
  const [respositories, setRepositories] = useState([])

  const handleSearch = async path => {
    if (repository.length) {
      const { id, name, full_name, description, html_url } = await getDataRepo(path)

      if (id && !uniqueList.has(id)) {

        uniqueList.add(id)

        const newRepositories = {
          id: id,
          linkRepository: html_url,
          name: name,
          path: full_name,
          description: description
        }

        setRepositories([...respositories, newRepositories])
      }
    }
  }

  const handleRemover = key => {
    const newRepositories = respositories.filter(repo => repo.id !== key)
    setRepositories(newRepositories)
  }

  return (
    <>
      <div className="app">
        <Header />
        <main>
          <div className='search'>
            <Input value={repository} onChange={event => setRepository(event.target.value)} />
            <ButtonSearch onClick={() => handleSearch(repository)} label={"Buscar"} />
          </div>
          <div className='repositories'>
            {respositories.map(({ linkRepository, name, path, description, id }) =>
              <ItemList onClick={() => handleRemover(id)} key={id} linkRepository={linkRepository} name={name} path={path} description={description} />
            )}
          </div>
        </main>
      </div>
    </>
  )
}

export default App