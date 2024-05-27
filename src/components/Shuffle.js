// src/components/Shuffle.js
import React, { useState, useEffect } from 'react';

const CLIENT_ID = "1e53a8e503e440ef9accd4cb9af809f7";
const CLIENT_SECRET = "54f37103d8fd46e09cd4fb689581c1f9";

function Shuffle() {
    const [accessToken, setAccessToken] = useState("");
    const [randomTrack, setRandomTrack] = useState(null);
    const [genre, setGenre] = useState("");

    useEffect(() => {
        const fetchAccessToken = async () => {
            const authParameters = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
            };

            const result = await fetch('https://accounts.spotify.com/api/token', authParameters);
            const data = await result.json();
            setAccessToken(data.access_token);
        };

        fetchAccessToken();
    }, []);

    const getRandomLetters = () => {
        const letters = 'abcdefghijklmnopqrstuvwxyz';
        const randomLetters = letters.charAt(Math.floor(Math.random() * letters.length)) +
            letters.charAt(Math.floor(Math.random() * letters.length));
        return randomLetters;
    };

    const handleShuffle = async () => {
        if (!accessToken) return;

        const randomLetters = getRandomLetters();
        const response = await fetch(`https://api.spotify.com/v1/search?q=${randomLetters}&type=track&limit=50`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        const data = await response.json();
        const tracks = data.tracks.items;

        if (tracks.length > 0) {
            const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
            setRandomTrack(randomTrack);

            const artistId = randomTrack.artists[0].id;
            const artistResponse = await fetch(`https://api.spotify.com/v1/artists/${artistId}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });
            const artistData = await artistResponse.json();
            setGenre(artistData.genres.join(', ') || 'Unknown');
        } else {
            setRandomTrack(null);
            setGenre('Unknown');
        }
    };

    return (
        <div className='shuffle-container' id="shuffle">
            <h1 className='shuffle-description'>Click the Shuffle button below to begin your musical journey.</h1>
            <button className='button-shuffle' onClick={handleShuffle}>Shuffle Now</button>
            <div className='shuffle-box'>
                {randomTrack && (
                    <>
                        <img src={randomTrack.album.images[0].url} alt={`${randomTrack.name} album cover`} className='track-img' />
                        <div className='track-details'>
                            <p>Song Title: {randomTrack.name}</p>
                            <p>Album: {randomTrack.album.name}</p>
                            <p>Artist: {randomTrack.artists.map(artist => artist.name).join(', ')}</p>
                            <p>Genre: {genre}</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Shuffle;

