import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import "./films.css";
import bigbuck from "./img/bigbuck.PNG";

export default function Films({ cookies }) {
    const history = useNavigate();

    const handleFilmRedirect = (e) => {
        history(`/films/${e.target.id}`);
    };

    useEffect(() => {
        if (!cookies.id) {
            toast.error('You need to log in first!');
            history("/login");
        }
    }, [cookies.id, history]);

    return (
        <div className="films-container">
            <div className="category-type">
                <span>
                    <div className="left-bar"></div>
                </span>
                <h2>Movies</h2>
                <span>
                    <div className="right-bar"></div>
                </span>
            </div>

            <div className="films">
                <div className="film">
                    <img
                        id="bigbuck"
                        onClick={handleFilmRedirect}
                        src={bigbuck}
                        alt="big buck movie poster"
                    />
                </div>
                <div className="film">
                    <img src={bigbuck} alt="big buck movie poster" />
                </div>
                <div className="film">
                    <img src={bigbuck} alt="big buck movie poster" />
                </div>
                <div className="film">
                    <img src={bigbuck} alt="big buck movie poster" />
                </div>
                <div className="film">
                    <img src={bigbuck} alt="big buck movie poster" />
                </div>
            </div>
        </div>
    );
}
