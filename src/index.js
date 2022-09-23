import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {UserProvider} from "./Contexts/UserContext";
//import {ProductsProvider} from "./Contexts/ProductsContext";
import {CartProvider} from "./Contexts/CartContext";
import {CategoriesProvider} from "./Contexts/CategoriesContext";
//When you're using Providers, you need to know which provider has access to another.

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <UserProvider>
                <CategoriesProvider>
                    <CartProvider>
                    <App/>
                    </CartProvider>
                </CategoriesProvider>
            </UserProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
