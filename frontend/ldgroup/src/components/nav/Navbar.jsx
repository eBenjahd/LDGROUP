// Stylesheet
import './Navbar.scss'

// Components
import SearchSvg from "./components/SearchIcon"
import BagSvg from "./components/CartIcon"


function Navbar({logo, links = []}) {

  const linksArray = Array.isArray(links) ? links : [links]
  

  return (
    <nav>
      {logo ? <img src={logo} alt="Logo" /> : 'LD Group'}
      <ul>
        {linksArray.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.name}</a> 
          </li>
      ))}
      </ul>
      <div className='icons'>
        <SearchSvg />
        <BagSvg itemQuantity={[]}/>

      </div>

    </nav>
  )
}

export default Navbar
