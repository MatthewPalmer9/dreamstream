import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./films.css";
import bigbuck from "./img/bigbuck.PNG";
import sintel from "./img/sintel.PNG";
import elephantsdream from "./img/elephantsdream.PNG";
import tearsofsteel from "./img/tearsofsteel.PNG";
import nightmarebeforechristmas from './img/nightmarebeforechristmas.PNG';

export default function Films() {
    const history = useNavigate();
    const [cookies] = useCookies();

    const handleFilmRedirect = (e) => {
        history(`/films/${e.target.id}`);
    };

    useEffect(() => {
        if (!cookies.id) {
            toast.error("You need to log in first!");
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
                    <img
                        id="sintel"
                        onClick={handleFilmRedirect}
                        src={sintel}
                        alt="sintel movie poster"
                    />
                </div>
                <div className="film">
                    <img
                        id="elephantsdream"
                        onClick={handleFilmRedirect}
                        src={elephantsdream}
                        alt="elephants dream movie poster"
                    />
                </div>
                <div className="film">
                    <img
                        id="tearsofsteel"
                        onClick={handleFilmRedirect}
                        src={tearsofsteel}
                        alt="tears of steel movie poster"
                    />
                </div>
                <div className="film">
                    <img 
                        id="nightmarebeforechristmas"
                        onClick={handleFilmRedirect}
                        src={nightmarebeforechristmas} 
                        alt="the nightmare before christmas movie poster" />
                </div>
            </div>
        </div>
    );
}
