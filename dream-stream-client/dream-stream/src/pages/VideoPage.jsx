import React from 'react'
import Video from '../components/Video/Video.jsx';
import '../components/styles/video.css';

export default function VideoPage({src}) {
    return (
        <div className="video-container">
            <Video src={src} />
        </div>
    )
}
