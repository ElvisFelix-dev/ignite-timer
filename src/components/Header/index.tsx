import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import { HeaderContainer } from './styles'

import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="">
        <img src={logoImg} alt="" />
      </NavLink>
      <nav>
        <NavLink to="/" title="Timer" end>
          <Timer size={24} />
        </NavLink>

        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
