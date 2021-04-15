import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";
import { useEffect, useState } from 'react';
//components
import Home from "../components/Home";
import LoginExample from "../components/LoginExample";

function ExampleRoutes() {
    const [checkLogin, setCheckLogin] = useState(false);

    return (
        <>
            <Router>
                <Switch>
                    <Route path="/login">
                        <LoginExample
                            setCheckLogin={setCheckLogin}
                        />
                    </Route>
                    <Route exact path="/">
                        <Home checkLogin={checkLogin} logout={setCheckLogin} />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;