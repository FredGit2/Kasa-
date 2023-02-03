import { Link } from "react-router-dom"

function Error() {

    return (
        <div className="container">
            <div className="error__content">
            <h1>404</h1>
                <p>Oups! La page demandée n'existe pas</p>
              <Link to='/'>Retourner sur la page d'acceuil</Link> 
            </div>
        </div>
    )
}

export default Error