import { createRoot } from 'react-dom/client';
import { ApolloProvider } from '@apollo/client/react';
import client from './API/ApolloClient';
import { PokemonsApp } from './PokemonsApp';
import './index.css';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/pokedex-tita-media">
    <ApolloProvider client={client}>
        <PokemonsApp />
    </ApolloProvider>
  </BrowserRouter>
  ,
)
