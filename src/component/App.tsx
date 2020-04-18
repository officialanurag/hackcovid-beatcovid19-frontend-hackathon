import React, { FC } from 'react';
import './App.css';
import { HomeComponent } from '../component/Home/HomeComponent';
import { NavbarComponent } from '../component/Navbar/NavbarComponent';

const App: React.FC<{}> = () => {
    return (
    <div> 
       <NavbarComponent/>
       <HomeComponent/>
    </div>
    )
}

export default App;