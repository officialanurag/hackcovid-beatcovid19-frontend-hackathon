import React, { FC } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import { HomeComponent } from '../component/Home/HomeComponent';
import { NavbarComponent } from '../component/Navbar/NavbarComponent';
import { FooterComponent } from '../component/Footer/FooterComponenet';
import { BlogComponent } from '../component/Blog/BlogComponent';
//import { SignupComponent } from '../component/Signup/SignupComponent';
import {AboutComponent} from '../component/Aboutus/AboutComponent';
import { FamilyRegistrationComponent } from '../component/Familyregistration/FamilyRegistrationComponent';
import { PrecautionComponent } from  '../component/Precautions/PrecautionComponent';
import { ContactusComponent } from  '../component/Contactus/ContactusComponent';

const App: React.FC<{}> = () => {
    return (
        <Router>
            <div> 
                <NavbarComponent/>
                <Route path="/" exact component={HomeComponent} />
                <Route path="/blog" exact component={BlogComponent} />
                <Route path="/precaution" exact component={PrecautionComponent} />
                <Route path="/contactus" exact component={ContactusComponent} />
                <Route path="/about" exact component={AboutComponent} />
                <Route path="/familyregistration"  exact component={ FamilyRegistrationComponent }/>
                <FooterComponent/>
                </div>
        </Router>
    )
}

export default App;