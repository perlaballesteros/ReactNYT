import React, { Component } from "react";
import Jumbotron from "./components/jumbotron/jumbotron";
import FormConatiner from "./components/panelForm/formContainer";
import ResultsContainer from "./components/panelResults/resultsContainer";
import SavedContainer from "./components/panelSaved/savedContainer";
import Footer from "./components/footer/footer";

class App extends Component {
  render() {
    return (
      //week6 bootstrap layout
      //Main Bootstrap Search
      <div className="container">
        <Jumbotron/>
        {/* <!-- Row for Searching New York Times --> */}
        <FormConatiner/>
        {/* <!-- This row will handle all of the retrieved articles --> */}
        <ResultsContainer/>
        {/* <!-- This row will handle all of the saved articles --> */}
        <SavedContainer/>
        {/* Footer Region */}
        <Footer/>
      </div>
    );
  }
}

export default App;
