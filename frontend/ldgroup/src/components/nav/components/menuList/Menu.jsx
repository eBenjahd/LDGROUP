import { Link } from 'react-router-dom'
import { useMenu } from '../../../../context/MenuContext'

function Menu() {

    const { links } = useMenu()
  return (
    <ul>
      {links.map((link, index) => (
        <li key={index}>
            <Link to={link.url}>{link.name}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Menu
