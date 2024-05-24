import './style.css'

import ButtonRemover from '../ButtonRemover'

// eslint-disable-next-line react/prop-types
function ItemList({ name, path, description, linkRepository, onClick }) {
  return (
    <div className='ItemList'>
      <div className='header-repository'>
        <div className='title'>
          <a href={linkRepository}>
            <h1>{name}</h1>
          </a>
          <p>{path}</p>
        </div>
        <div>
          <ButtonRemover onClick={onClick} />
        </div>
      </div>
      <hr />
      <div className='description'>
        <h2>Description</h2>
        <p>{description}</p>
      </div>
      <hr />
    </div>
  )
}

export default ItemList