//import logo from './logo.svg';
import * as React from 'react';
import './App.css';
import 'antd/dist/reset.css';
import Navigation from './Components/Navigation';
// import Footer from './Components/Footer';
import RoutesTree from './Components/RoutesTree';

function App() {
  return(
    <div className="App">
    <Navigation />
    <RoutesTree />
 {/* <Footer /> */}

    </div>
  );
}

export default App;
