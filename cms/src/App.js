import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Admin, Resource, Delete } from 'admin-on-rest';
import postgrestClient from './aor-postgrest-client';
import { QuoteCreate, QuoteEdit, QuoteList } from './quotes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Admin restClient={postgrestClient('//localhost:3000')}>
          <Resource
            name="quotes"
            create={QuoteCreate}
            edit={QuoteEdit}
            list={QuoteList}
            remove={Delete}
          />
        </Admin>
      </div>
    );
  }
}

export default App;
