import { useState } from 'react'
import arrow from '../assets/Arrow.png'


const Collapse = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false)
    
   
  
    return (
      <li className='collapse'>
        <div className="collapse__title" onClick={() => setIsOpen(!isOpen)}>
          <span className="title">{title}</span>
          <span>{isOpen ? <button className="collapse__open" ><img src={arrow} alt="" /> </button> : <button className="collapse__closed"><img src={arrow} alt="" /></button>}</span>
        </div>
        {isOpen && <div className="collapse__content">{content}</div>}
      </li>
      
    )
  }
  
  export default Collapse
  
