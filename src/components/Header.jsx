import { NavLink } from 'react-router-dom'
import KasaLogo from '../assets/KasaLogo.png'

function Header() {
    let activeStyle = {
        textDecoration: "underline"
    }

    return (
        <header>
            <div className='container'>
                <div className='header__content'>
                    <NavLink className='header__logo' to='/' ><img src={KasaLogo} alt='Kasa' /></NavLink>
                    <nav className='header__nav'>
                        <ul className='nav__ul'>
                            <li><NavLink className='nav__a' to="/" style={({ isActive }) =>
                                isActive ? activeStyle : undefined} > Accueil </NavLink></li>
                            <li><NavLink className='nav__a' to="/about" style={({ isActive }) =>
                                isActive ? activeStyle : undefined}> A Propos</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header