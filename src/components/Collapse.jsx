import { useState } from 'react'
import arrow from '../assets/Arrow.png'


const Collapse = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false)
    
   
  
    return (
      <div className='collapse'>
        <li>
          <div className="collapse__title" onClick={() => setIsOpen(!isOpen)}>
           <span className="title">{title}</span>
           <span>{isOpen ? <button className="collapse__open" ><img src={arrow} alt="flèche" /> </button> : <button className="collapse__closed"><img src={arrow} alt="flèche" /></button>}</span>
        </div>
          {isOpen && <div className="collapse__content">{content}</div>}
        </li>
      </div>
      )
  }
  
  export default Collapse
  
