import React from "react";
import SaveBtn from "./savebtn.js";
{/* <!-- Jumbotron for Title --> */}
const ResultsContainer=(props)=>(
    <div className="row">
        <div className="col-sm-12">
        <br/>
        {/* <!-- This panel will initially be made up of a panel and wells for each of the articles retrieved --> */}
            <div className="panel panel-primary">

                {/* <!-- Panel Heading for the retrieved articles box --> */}
                <div className="panel-heading">
                    <h3 className="panel-title"><strong><i className="fa fa-table"></i> Results</strong></h3>
                </div>
                {/* <!-- This main panel will hold each of the resulting articles --> */}
                <div className="panel-body" >
                    <ul>
                        {props.articleResults.map(article=>(
                            <li>
                                <a href={article.web_url}><h3>{article.headline.main}</h3></a>
                                <h6>{article.pub_date}</h6>
                                <p>{article.snippet}</p>
                                <SaveBtn saveArticle={props.saveArticle} 
                                link={article.web_url} 
                                title={article.web_url}
                                date={article.pub_date}/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

export default ResultsContainer;