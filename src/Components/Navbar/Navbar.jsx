import { Component } from 'react';
import './Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <div className='nav'>
        <div className="nav-logo">Ele-mulator</div>
        <ul className="nav-menu">
            <li>Home</li>
            <li>About</li>
            <li className='nav-contact'>Contact</li>
        </ul>
        
      </div>
    )
  }
}

export default Navbar
