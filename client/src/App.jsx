import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/index.css'
import { Outlet } from 'react-router-dom';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { createContext, useState } from 'react';

export const LocationContext = createContext('12');

import Header from './components/Header';

const httpLink = createHttpLink({
    uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {

    const token = localStorage.getItem('id_token');

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({

    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function App() {
    const [location, setLocation] = useState();

    return (
        <ApolloProvider client={client}>
            <LocationContext.Provider value={{ location, setLocation }}>
                <Header />
                <Outlet />
            </LocationContext.Provider>
        </ApolloProvider>
    );
}

export default App;
