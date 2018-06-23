import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import SearchWindow from "./components/SearchWindow";
import SavedArt from "./components/SavedArt";
import Results from "./components/Results";
import Footer from "./components/Footer";
import "./App.css";



class App extends Component {

  state = {


  }


  render() {
    return (

      <div className="background">

        <Navbar />
        <Jumbotron />
        <SearchWindow />
        <Results />
        <SavedArt />
        <Footer />

      </div>

    );
  }

};

export default App;
