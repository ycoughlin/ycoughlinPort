import React, { Component } from 'react';
import Nav from './components/navigation/nav';
import Home from './components/pages/home';
import ErrorPage from './components/pages/error';
import Footer from './components/navigation/footer';
import './app.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Nav />
                <Home />
                <Error />
                <Footer />
            </div>
        );
    }
}

export default App;