import * as React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/client';

import { createClient } from './graphql';
import { AppTest } from './AppTest';

import './localisation/i18n';

/* eslint-disable no-undef */
render(
  <ApolloProvider client={createClient()}>
    <AppTest />
  </ApolloProvider>,
  document.getElementById('root'),
);
