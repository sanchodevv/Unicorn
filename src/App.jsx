import { Route, Routes } from "react-router-dom"
import { useState } from "react";
import Aside from "./components/Aside/aside"
import Bar from "./components/Bar/bar"
import { routes } from "./constants/routes";
import Login from "./Pages/Login/login";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    if (!isLoggedIn) {
        return <Login setIsLoggedIn={setIsLoggedIn} />;
    }

    return (
        <>
            <div className="wrap">
                <Aside />
                <div className="main">
                    <Routes>
                        {
                            routes.map((route, index) => (
                                <Route
                                key={index}
                                path={route.path}
                                element={<route.element />}
                                />
                            ))
                        }
                    </Routes>
                    <Bar />
                </div>
            </div>
        </>
    )

}
export default App;