import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Launches } from './components/Launches'
import Launch from './components/Launch'

import './App.css'
import './bootstrap.min.css'
import logo from './logo.png'

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache(),
})

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <div className="container">
                    <img src={logo} alt="SpaceX logo" style={{ width: 500, display: 'block', margin: 'auto' }} />
                    {/*<Launches />*/}
                </div>
                <Route exact path={'/'} component={Launches} />
                <Route exact path={'/launch/:flight_number'} component={Launch} />
            </Router>
        </ApolloProvider>
    )
}

export default App
