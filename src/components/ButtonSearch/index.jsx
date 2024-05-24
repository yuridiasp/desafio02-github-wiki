import './style.css'

// eslint-disable-next-line react/prop-types
function ButtonSearch({ label, onClick }) {
  return (
    <button onClick={onClick} className='ButtonSearch'>{label}</button>
  )
}

export default ButtonSearch