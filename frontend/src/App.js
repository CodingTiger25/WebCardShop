import {Route, HashRouter as Router, Routes} from "react-router-dom";
import './App.css';
import * as React from "react";
import Main from './Pages/Main';
import Home from './Pages/Home';
import {Link} from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Magic from "./Pages/Magic";
import Yugioh from "./Pages/Yugioh";
import CardView from "./Pages/CardView";
import YugiohView from "./Pages/YugiohView";
import Cart from "./Pages/Cart";

function App() {
  return (
    <div>
        <Router>
            <Routes>
                <Route exact path={'/'} element={<Home></Home>}></Route>
                <Route path={'/main'} element={<Main></Main>}></Route>
                <Route path={'/login'} element={<Login></Login>}></Route>
                <Route path={'/register'} element={<Register></Register>}></Route>
                <Route path={'/token'} element={<Login></Login>}></Route>
                <Route path={'/magic'} element={<Magic></Magic>}></Route>
                <Route path={'/yugioh'} element={<Yugioh></Yugioh>}></Route>

                <Route path={'/cardview/:id'} element={<CardView></CardView>}></Route>
                <Route path={'/yugiohview/:id'} element={<YugiohView></YugiohView>}></Route>
                <Route path={"/cart"} element={<Cart></Cart>}></Route>
            </Routes>
        </Router>

    </div>
  );
}

export default App;
