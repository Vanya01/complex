import { Rating, RatingView } from 'react-simple-star-rating';
import React, { useState } from 'react';

 export default function Stars() {
    const [rating, setRating] = useState(0) // initial rating value

    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)
        // Some logic
    }

    return (
        <div className='App'>
            <Rating onClick={handleRating} ratingValue={rating} /* Rating Props */ />
        </div>
    )
}

export  function MyComponent() {
    return (
        <div className='App'>
            <RatingView ratingValue={2} /* RatingView Props */ />
        </div>
    )
}

