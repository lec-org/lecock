import { navs } from '@renderer/mock/page'
import { JSX } from 'react'
import NavItem from './nav-item'
import './index.css'
const NavBar = (): JSX.Element => {
  return (
    <div className="nav-container">
      {navs.map((item) => (
        <NavItem {...item} key={item.name} />
      ))}
    </div>
  )
}

export default NavBar
