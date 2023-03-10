import KasaLogoFooter from '../assets/KasaLogoFooter.png'

function Footer() {
    
    return (
        <footer className='footer__container'>
           
                <div className='footer__content'>
                    <img src={KasaLogoFooter} alt='Kasa' className='footer__logo' />
                    <p>"© 2020 Kasa. All rights reserved"</p>
                </div>
            
        </footer>
    )
}

export default Footer