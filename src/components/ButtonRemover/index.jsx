import './style.css'

// eslint-disable-next-line react/prop-types
function ButtonRemover({ onClick }) {
  return (
    <button className='ButtonRemover' onClick={onClick}>Remover</button>
  )
}

export default ButtonRemover