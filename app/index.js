import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App.js';

class App extends React.Component {
    render(){
        return(
           ""
        )
    }
}

// How you use a component
ReactDOM.render(
    // React Element 
    <App />,
    // Where to render to the element to 
    document.getElementById('app')
)
