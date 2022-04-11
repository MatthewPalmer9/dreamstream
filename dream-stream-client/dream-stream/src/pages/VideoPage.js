import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Video from "../components/Video/Video.jsx";
import "../components/styles/video.css";
import { toast } from "react-toastify";

export default function VideoPage({ src, cookies }) {

    const history = useNavigate();

    useEffect(() => {
        if(!cookies.id) { 
            toast.error('You need to log in first!');
            history("/login");
        }
    }, [cookies.id, history])

    return (
        <div className="video-container">
            <Video src={src} />
        </div>
    );
}