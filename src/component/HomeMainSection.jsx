import React from 'react';
import Link from 'react-router-dom';
import reviews from '../data/reviews.json';

function HomeMainSection() {
    return (
        <div>
            <div className="about-us">
                <h2>About Us</h2>
                <p>Our company is the best company in the world. We have the best products and the best customer service.</p>
                <br />
                <Link to="/products">Shop Now!</Link>
            </div>
            <div className="reviews"> {/* MUST COMPLETE REVIEWS SECTION!!! */}
            </div>
        </div>       
    )
}

export default HomeMainSection;