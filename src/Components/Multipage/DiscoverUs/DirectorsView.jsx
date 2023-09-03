import React from 'react';
import "./DirectorsView.css";
const DirectorsView = () => {
    return (
        <div>
            <div className='topdiv-directorView'>
                <h1> Discover Us</h1>
            </div>
        <div className='directorsView'>
            <div className='director_name'>
                <h3>From Director's Desk</h3>
                <h4>Mrs. Balpreet Kaur</h4>
            </div>
            <div className='DirectorsView'>
                <div className='director-img'>
                    <img src="/favicon.png" alt="director-img" />
                </div>
            </div>
            <div className='DirectorsMsg'>
                <div className='director-msg'>
                    <p> K Devendran, the Director of Dream Sketch Interiors, a multiple award-winning interior designing firm with over 10 years of expertise. With a keen eye for detail and a passion for creating luxurious spaces, K Devendran has successfully handled numerous high-end interior projects using the latest technologies and new products launched in the market. Over the years he has been awarded with prestigious accolades from renowned firms.
                    </p></div>
            </div>
        </div>
        </div>
    );
};

export default DirectorsView;
