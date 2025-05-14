import { JSX } from 'react'
import './index.css'

const NavItem = ({ name }: { name: string }): JSX.Element => {
  return <div className="nav-item">{name}</div>
}

export default NavItem
