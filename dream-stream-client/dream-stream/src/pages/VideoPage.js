import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Video from "../components/Video/Video.jsx";
import "../components/styles/video.css";
import { toast } from "react-toastify";

export default function VideoPage({ src, cookies, videoTitle, videoDescription }) {
    const history = useNavigate();

    useEffect(() => {
        if (!cookies.id) {
            toast.error("You need to log in first!");
            history("/login");
        }
    }, [cookies.id, history]);

    const handleRedirect = () => {
        history("/films");
    };

    return (
        <>
            <div className="navigate-back-bar">
                <button onClick={handleRedirect}>&larr; Back to Films</button>
            </div>
            <div className="video-container">
                <Video src={src} />
            </div>
            <div className="video-details">
                <h1 className="video-title">{videoTitle}</h1>
                <p className="video-description"><em>{videoDescription}</em></p>
            </div>
        </>
    );
}
