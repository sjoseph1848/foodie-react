import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App.js';
import Popular from './components/Popular'

class App extends React.Component {
    render(){
        return(
            <div className='container'>
               <Popular />
            </div>
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



// function isAuth() {
//     return true
// }

// function showWarning() {
//     return true
// }
// Component 
// State 
// Lifecycle 
// UI

// Violation of separation of concerns 
// How you define a component
// class App extends React.Component {
//     render() {
//       return(
//           <App />
//       )
//     }
// }
