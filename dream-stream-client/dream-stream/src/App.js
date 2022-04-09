import "./global-styles/global.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import API from "./services/api";
import VideoPage from "./pages/VideoPage.js";
import Landing from "./pages/Landing/Landing.js";
import Navbar from "./components/Navbar/Navbar.js";
import LogIn from "./components/Forms/LogIn.js";
import Films from "./pages/Films/Films";

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
                        element={<Landing setCookies={setCookies} />}
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
                    <Route 
                      exact
                      path="/films"
                      element={<Films />}
                    />
                    <Route
                        exact
                        path="films/bigbuck"
                        element={<VideoPage src="bigbuck" />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
