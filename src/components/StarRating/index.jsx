import {useState} from 'react'
import { FaStar } from 'react-icons/fa'

const StarRating = ({noOfStars = 5}) => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    const handleClick = (currentId) => {
        setRating(currentId);
    }
    const handleMouseEnter = (currentId) => {
        setHover(currentId);
    }
    const handleMouseLeave = () => {
        setHover(rating)
    }
  return (
    <div className='flex '>
    {
        [ ...Array(noOfStars)].map((_, index) => {
            index += 1
            return <FaStar
            key={index}
            className={index <= (hover || rating) ? 'text-yellow-300' : 'text-black' }
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
            />
        })
    }
    </div>
  )
}

export default StarRating;