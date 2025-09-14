import './Footer.scss'

function Footer( {redes = {}, links = {} ,year, logo }) {
  return (
    <footer>
      <p>&copy; Copyright {year} LDGROUP</p>
    </footer>
  )
}

export default Footer
