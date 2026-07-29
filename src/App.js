
import React from "react";
import ReactDOM from "react-dom/client"
import Home from "./component/Home";
import Restaurant from "./component/Restaurant";
import { BrowserRouter, Routes, Route } from "react-router";
import RestaurantMenu from "./component/RestaurantMenu";
import SearchFood from "./component/SearchFood"
import SecondaryHome from "./component/SecondaryHome";
import { store } from "./stored/stores";
import {Provider} from "react-redux"
import SignIn from "./component/signIn"

function App(){
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SecondaryHome />}>
                        <Route index element={<Home />} />
                        <Route path="/restaurant" element={<Restaurant />} />
                        <Route path="/city/lucknow/:id" element={<RestaurantMenu />} />
                        <Route path="/city/lucknow/:id/search" element={<SearchFood />} />
                        <Route path="signin" element={<SignIn />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);