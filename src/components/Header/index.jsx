import './style.css'

import ButtonMenu from '../ButtonMenu'
import GithubLogo from '../GithubLogo'

function index() {
  return (
    <header>
      <ButtonMenu />
      <GithubLogo />
      <ButtonMenu />
    </header>
  )
}

export default index