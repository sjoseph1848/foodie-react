import React from 'react'
import Hello from './Hello'


class App extends React.Component {
    render() {
        return <Hello 
        username='sjoseph1848'
        authed={true}
        logout={() => alert('Logged Out!')}
        header={<h2>Wave</h2>}
        />
    }
}

export default App