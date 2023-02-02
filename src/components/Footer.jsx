import KasaLogoFooter from '../assets/KasaLogoFooter.png'

function Footer() {
    
    return (
        <footer>
            <div className='container--footer'>
                <div className='footer__contend'>
                    <img src={KasaLogoFooter} alt='Kasa' className='footer__logo' />
                    <p>"© 2020 Kasa. All rights reserved"</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer