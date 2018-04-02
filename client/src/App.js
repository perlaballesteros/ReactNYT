import React, { Component } from "react";
import API from "./utils/API";
import Jumbotron from "./components/jumbotron/jumbotron";
import ResultsContainer from "./components/panelResults/resultsContainer";
import SavedContainer from "./components/panelSaved/savedContainer";
import Footer from "./components/footer/footer";

class App extends Component {
    state = {
      articles: [],
      savedArticles:[],
      articleSearch: "",
      articlesStart:"",
      articlesEnd:""
    };
    //load the saved articles when page loads
    componentDidMount() {
      this.loadSavedarticles();
    }
    //get all saved articles update the savedArticles state
    loadSavedarticles = () => {
      API.getSavedarticles()
        .then(res => this.setState({ savedArticles: res.data }))
        .catch(err => console.log(err));
    };
    updateSearch = event => {
      // Destructure the name and value properties off of event.target
      // Update the appropriate state
      const  {name, value}  = event.target;
      this.setState({
        [name]: value
      });
      
    };
    handleFormSubmit = event => {
      // When the form is submitted, prevent its default behavior, get articles update the articles state
      event.preventDefault();
      const searchTerms={
        q:this.state.articleSearch,
        begin_date:this.state.articlesStart,
        end_date:this.state.articlesEnd
      }
      API.getArticles(searchTerms)
        .then(res => this.setState({ articles: res.data }))
        .catch(err => console.log(err));
    };

    //save articles when save btn is clicked and load articles again
    saveArticle=(title,link,date,description)=>{
      const articleData={
        title:title,
        link:link,
        description:description,
        pub_date:date
      }
      //console.log(articleData);
      API.saveArticle(articleData).then(()=>{
        this.loadSavedarticles();
      });
    }
    //delete the saved article and update the saved articles state
    deleteArticle=(id)=>{
      console.log(id);
      API.deleteSavedarticle(id).then(()=>{
        this.loadSavedarticles();
      });
    }
  render() {
    return (
      
      //week6 bootstrap layout
      //Main Bootstrap Search
      <div className="container">
        <Jumbotron/>
        {/* <!-- Row for Searching New York Times --> */}
        <div className="row">
          <div className="col-sm-12">
            <br/>
            {/* <!-- First panel is for handling the search parameters --> */}
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
              </div>
              <div className="panel-body">
                {/* <!-- Here we create an HTML Form for handling the inputs--> */}
                <form>
                  {/* <!-- Here we create the text box for capturing the search term--> */}
                  <div className="form-group">
                    <label>Search Term:</label>
                    <input name= "articleSearch" onChange={this.updateSearch} value={this.state.articleSearch} type="text" className="form-control" id="search-term" placeholder="Search For a Articles"/>
                  </div>
                  {/* <!-- Here we capture the Start Year Parameter--> */}
                  <div className="form-group">
                    <label>Start Year (Optional):</label>
                    <input type="text" className="form-control" id="start-year" name= "articlesStart" onChange={this.updateSearch} placeholder="YYYY/MM/DD"/>
                  </div>
                  {/* <!-- Here we capture the End Year Parameter --> */}
                  <div className="form-group">
                    <label>End Year (Optional):</label>
                    <input type="text" className="form-control" id="end-year" name= "articlesEnd" onChange={this.updateSearch} placeholder="YYYY/MM/DD"/>
                  </div>
                  {/* <!-- Here we have our final submit button --> */}
                  <button onClick={this.handleFormSubmit} type="submit" className="btn btn-default" id="run-search"><i className="fa fa-search"></i> Search</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- This row will handle all of the retrieved articles --> */}
        <ResultsContainer saveArticle={this.saveArticle} articleResults={this.state.articles}/>
        {/* <!-- This row will handle all of the saved articles --> */}
        <SavedContainer savedArticles={this.state.savedArticles} deleteArticle={this.deleteArticle} />

        {/* Footer Region */}
        <Footer/>
    </div>
    );
  }
}

export default App;

