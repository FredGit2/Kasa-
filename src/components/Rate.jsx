import EmptyStar from '../assets/EmptyStar.png'
import FullStar from '../assets/FullStar.png'

const Rate = ({rating}) => {
    
    const stars= [1, 2, 3, 4, 5]
    return(
        <div className='rate__container'>
            {stars.map((star) => 
            rating >= star ? (
                <span key={star.toString()}><img src={FullStar} alt="Full Star" /></span>
            ) : (
                <span key={star.toString()}><img src={EmptyStar} alt="Empty Star" /></span>
            )
            )}
        </div>
        
    )
}

export default Rate