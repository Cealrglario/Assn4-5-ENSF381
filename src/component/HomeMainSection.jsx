import React, { useEffect, useState } from 'react';
import "../App.css";
import reviews from '../data/reviews.js';

function HomeMainSection() {
    const [selectedReviews, setSelectedReviews] = useState([]);

    useEffect(() => {
        const getRandomReviews = () => {
            let randomIndexes = [];
            while(randomIndexes.length < 2){
                let r = Math.floor(Math.random() * reviews.length); // get a random index within the array of reviews
                if(randomIndexes.indexOf(r) === -1) randomIndexes.push(r); // if the random index is not already in the array, add it
            }
            return randomIndexes.map(i => reviews[i]);
        }

        setSelectedReviews(getRandomReviews());
    }, []); // only update reviews upon a page refresh

    const getStars = (stars) => {
        return '⭐'.repeat(stars); // display the star ratings as a string of star emojis rather than a number
    }

    return (
        <div>
            <div className="about-us">
                <h2>About Us</h2>
                <p>Our company is the best company in the world. We have the best products and the best customer service.</p>
                <a href="/Productpage">Shop Now</a>
            </div>
            <div className="reviews">
                <h2>Customer Reviews</h2>
                {selectedReviews.map((review) => (
                    <div class="review">
                        <h3>{review.customerName}</h3>
                        <p>{review.reviewContent}</p>
                        <p>Rating: {getStars(review.stars)}</p>
                    </div>
                ))}
            </div>
        </div>       
    )
}

export default HomeMainSection;