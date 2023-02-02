import * as React from 'react';
import {render} from 'react-dom';
import {ApolloProvider} from '@apollo/client';

import {createClient} from './graphql';
import {App} from './App';

import './localisation/i18n';

/* eslint-disable no-undef */
render(
  <ApolloProvider client={createClient()}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
