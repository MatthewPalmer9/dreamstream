import React from 'react';
import './styles/video.css';

export default function Video({src}) {
    
    const API_URL = process.env.REACT_APP_DS_API;
    
    return (
        <video id="videoPlayer" controls muted autoPlay>
            <source 
                src={`${API_URL}/video/${src}`}
                type="video/mp4"
            />
        </video>
    );
};
