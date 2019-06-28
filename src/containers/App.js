import React, {Suspense} from 'react';
import Header from "../components/Header";
import Body from '../components/Body';
import '../App.css';
require('dotenv').config();

function App() {
  return (
    <div className="App">
      <Header/>
      <Suspense fallback={<Loading />}>
        <Body/>
      </Suspense>
    </div>
  );
}

function Loading(props) {
  return <div>Loading...</div>;
}

export default App;
