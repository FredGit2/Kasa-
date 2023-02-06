import listAppartments from '../datas/logements.json'
import { NavLink } from 'react-router-dom'

function Card() {
  return (
    <section>
      <div className='card__container'>
        <ul className='card__apparts'>
          {listAppartments.map((appart) => (
            <NavLink to={`/Appartments/${appart.id}` } className='card__appart' key={appart.id}>
              <li>
                <img src={appart.cover} alt="logement" />
                <h2>{appart.title}</h2>
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Card