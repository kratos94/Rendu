import React from "react";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MenuComponent from './components/MenuComponent';
import ProfileComponent from "./components/ProfileComponent";
import HomeComponent from "./components/HomeComponent";
import RegisterComponent from "./components/RegisterComponent";
import ForgottenComponent from "./components/ForgottenComponent";
import LoginComponent from "./components/LoginComponent";



const MainNavigator = createStackNavigator({
    Login: {
        screen: LoginComponent,
        path: 'login',
    },
     Home: {
         screen: HomeComponent,
         path: 'home',
     },
    Profile: {
        screen: ProfileComponent,
        path: 'profile',
    },
     Menu: {
         screen: MenuComponent,
         path: 'menu',
     },
    Register: {
        screen: RegisterComponent,
        path: 'register',
    },
    Forgotten: {
        screen: ForgottenComponent,
        path: 'forgotten',
    },
});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
    render() {
        return <AppContainer />
    }
}

// Routes things
