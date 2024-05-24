import './style.css'

// eslint-disable-next-line react/prop-types
function Input({ value, onChange }) {
  return (
    <input value={value} onChange={onChange} placeholder='user/resposytory' />
  )
}

export default Input