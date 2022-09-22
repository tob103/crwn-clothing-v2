import React from "react";
import Home from "./Components/Routes/Home/Home";
import SignInForm from "./Components/SignInForm/SignInForm";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import {Route, Routes} from "react-router";
import SignInPage from "./Components/Routes/SignIn/SignInPage";
import Shop from "./Components/Routes/Shop/Shop";


const App = () => {
    return (
        <Routes>
            <Route path='/' element={<NavigationBar />}>
                       <Route index element={<Home/>} />
                <Route path="shop" element={<Shop/>}/>
                <Route path="sign-in" element={<SignInPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;
