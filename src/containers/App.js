import React from 'react';
import Header from "../components/Header";
import Body from '../components/Body';
import '../App.css';
import { Provider } from 'react-redux'
import configureStore from '../redux/configureStore'

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
