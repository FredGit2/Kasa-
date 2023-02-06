import { useState } from 'react';
import Arrow from "../assets/Arrow.png"

const Slideshow = ({ images }) => {
const [index, setIndex] = useState(0);
  
    const handlePrevious = () => {
      setIndex((index + images.length - 1) % images.length);
    };
  
    const handleNext = () => {
      setIndex((index + 1) % images.length);
    };
  
    if (images.length === 1) { // gestion en cas d'une seule image pour ne pas afficher les boutons
      return(
          <div className='container-slideshow'>
            <div className='container-slideshow__element'>
             <img className='container-slideshow__image' src={images[index]} alt={images.title} />
             </div>
               <span className="container-slideshow__counter">
                  <p>{index + 1}/{images.length}</p>
                </span>
          </div>
 ) } else {
    return (
      <div className='container-slideshow'>
            <div className='container-slideshow__element'>
                <img className='container-slideshow__image' src={images[index]} alt={images.title} />
            </div>
            <span className="container-slideshow__counter">
                <p>{index + 1}/{images.length}</p>
            </span>
        <button className='previous--button' onClick={handlePrevious}> <img src={Arrow} alt="bouton précédent" /></button>  
        <button className='next--button' onClick={handleNext}><img src={Arrow} alt="bouton suivant" /></button>
      </div>
    );
  };
}
  export default Slideshow;
