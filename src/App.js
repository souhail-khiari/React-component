import React from "react";
import "./App.css";
import Address from "./components/profile/Address";
import FullName from "./components/profile/FullName";
import ProfilePhoto from "./components/profile/ProfilePhoto";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div className="App">
            <ProfilePhoto />
            <FullName />
            <Address />
        </div>
    );
}

export default App;
