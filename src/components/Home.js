import React from 'react';
import { ReactTyped } from "react-typed";


const Home = () => {
    return (
        <div className="home-container" id="home">
            <h1 className='title-animation'>
            <ReactTyped strings={["Discover New Music with BeatShuffle!"]} typeSpeed={100} loop />
             
            </h1>
            <p className="title-description">Explore a world of music by shuffling through random songs and artists.</p>
        </div>
    );
};

export default Home;