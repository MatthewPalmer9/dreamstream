import "./global-styles/global.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import API from "./services/api";
import VideoPage from "./pages/VideoPage.js";
import Landing from "./pages/Landing/Landing.js";
import Navbar from "./components/Navbar/Navbar.js";
import LogIn from "./components/Forms/LogIn.js";
import Films from "./pages/Films/Films";
import Logout from "./pages/Logout/Logout";
import NotFound from "./pages/NotFound/NotFound";

function App() {
    const [cookies, setCookies, removeCookies] = useCookies([]);
    const [user, setUser] = useState();
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if (cookies.id) {
            setLoggedIn(true);
            setUser(cookies.id);
        }
    }, [cookies.id]);

    const handleLogin = async (e, loginData) => {
        e.preventDefault();

        const api = new API();
        return api.login({ loginData }).then((resp) => {
            if (resp.status >= 200 && resp.status <= 299) {
                setCookies("jwt", resp.token);
                setCookies("id", resp.user.name);
                setUser(resp.user.name);
                setLoggedIn(true);
            } else {
                throw new Error("Invalid credentials");
            }
        });
    };

    const handleLogout = async () => {
        async function logout() {
            removeCookies("jwt");
            removeCookies("id");
            setUser(null);
            setLoggedIn(false);
        }
        await logout();
    };
    return (
        <div className="App">
            <>
                <ToastContainer draggable={false} />
            </>
            <Router>
                <Navbar
                    loggedIn={loggedIn}
                    user={user}
                    handleLogout={handleLogout}
                />
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Landing cookies={cookies} />}
                    />
                    <Route
                        exact
                        path="/login"
                        element={
                            <LogIn
                                handleLogin={handleLogin}
                                setLoggedIn={setLoggedIn}
                                loggedIn={loggedIn}
                            />
                        }
                    />
                    <Route exact path="/logout" element={<Logout />} />
                    <Route exact path="/films" element={<Films />} />
                    <Route
                        exact
                        path="films/elephantsdream"
                        element={
                            <VideoPage
                                cookies={cookies}
                                src="elephantsdream"
                                videoTitle={"Elephant's Dream"}
                                videoDescription={
                                    "Elephants Dream (code-named Project Orange during production and originally titled Machina) is a 2006 Dutch computer animated science fiction fantasy experimental short film produced by Blender Foundation using, almost exclusively, free and open-source software. The film is English-language and includes subtitles in over 30 languages."
                                }
                            />
                        }
                    />
                    <Route
                        exact
                        path="films/bigbuck"
                        element={
                            <VideoPage
                                cookies={cookies}
                                src="bigbuck"
                                videoTitle={"Big Buck Bunny"}
                                videoDescription={
                                    "Big Buck Bunny (code-named Project Peach) is a 2008 short computer-animated comedy film featuring animals of the forest, made by the Blender Institute, part of the Blender Foundation. Like the foundation's previous film, Elephants Dream, the film was made using Blender, a free and open-source software application for 3D computer modeling and animation developed by the same foundation. Unlike that earlier project, the tone and visuals departed from a cryptic story and dark visuals to one of comedy, cartoons, and light-heartedness."
                                }
                            />
                        }
                    />
                    <Route
                        exact
                        path="films/sintel"
                        element={
                            <VideoPage
                                cookies={cookies}
                                src="sintel"
                                videoTitle={"Sintel"}
                                videoDescription={
                                    "Sintel, code-named Project Durian during production, is a 2010 computer-animated fantasy short film. It was the third Blender 'open movie'. It was produced by Ton Roosendaal, chairman of the Blender Foundation, written by Esther Wouda, directed by Colin Levy, at the time an artist at Pixar and art direction by David Revoy, who is known for Pepper&Carrot an open source webcomic series. It was made at the Blender Institute, part of the Blender Foundation. The plot follows the character, Sintel, who is tracking down her pet Scales, a dragon. Just like the other Blender 'open movies,' the film was made using Blender, a free and open source software application for animation, created and supported by the Blender Foundation."
                                }
                            />
                        }
                    />
                    <Route
                        exact
                        path="films/tearsofsteel"
                        element={
                            <VideoPage
                                cookies={cookies}
                                src="tearsofsteel"
                                videoTitle={"Tears of Steel"}
                                videoDescription={
                                    "Tears of Steel (code-named Project Mango) is a short science fiction film by producer Ton Roosendaal and director/writer Ian Hubert. The film is both live-action and CGI; it was made using new enhancements to the visual effects capabilities of Blender, a free and open-source 3D computer graphics app. Set in a dystopian future, the short film features a group of warriors and scientists who gather at the Oude Kerk in Amsterdam in a desperate attempt to save the world from destructive robots."
                                }
                            />
                        }
                    />
                    <Route
                        exact
                        path="films/nightmarebeforechristmas"
                        element={
                            <VideoPage
                                cookies={cookies}
                                src="nightmarebeforechristmas"
                                videoTitle={"The Nightmare Before Christmas"}
                                videoDescription={"The Nightmare Before Christmas (also known as Tim Burton's The Nightmare Before Christmas) is a 1993 American stop-motion animated musical dark fantasy film directed by Henry Selick (in his feature directorial debut) and produced and conceived by Tim Burton. It tells the story of Jack Skellington, the King of 'Halloween Town' who stumbles upon 'Christmas Town' and becomes obsessed with celebrating the holiday. Danny Elfman wrote the songs and score, and provided the singing voice of Jack"}
                            />
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
